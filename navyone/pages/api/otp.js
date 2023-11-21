import bcrypt from 'bcryptjs';
import fetch from 'node-fetch';
import User from '@/models/User'; // Adjust the path as necessary
import dbConnect from '@/utils/dbConnect'; // Adjust the path to your dbConnect utility

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    // Send OTP logic
    const { mobileNumber } = req.body;

    if (!mobileNumber || mobileNumber.length !== 10) {
      return res.status(400).json({ error: 'Invalid mobile number' });
    }

    const otp = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('');
    const salt = await bcrypt.genSalt(10);
    const hashedOtp = await bcrypt.hash(otp, salt);
    const otpTimestamp = new Date();

    await User.findOneAndUpdate(
      { mobileNumber },
      { otp: hashedOtp, otpTimestamp },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    const apiKey = process.env.FAST2SMS_API_KEY;
    const response = await fetch('https://www.fast2sms.com/dev/bulkV2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey
      },
      body: JSON.stringify({
        route: 'otp',
        numbers: mobileNumber,
        variables_values: otp, 
      })
    });

    const data = await response.json();
    if (data.return) {
      return res.status(200).json({ message: 'OTP sent successfully' });
    } else {
      return res.status(500).json({ error: 'Failed to send OTP' });
    }
  } else if (req.method === 'PUT') {
    // Verify OTP logic
    const { mobileNumber, otp } = req.body;

    const user = await User.findOne({ mobileNumber });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isOtpMatch = await bcrypt.compare(otp, user.otp);
    if (!isOtpMatch) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    const otpAge = (new Date() - new Date(user.otpTimestamp)) / 1000 / 60;
    if (otpAge > 3) {
      return res.status(400).json({ error: 'OTP expired' });
    }

    // Clear the OTP from the user document
    await User.findOneAndUpdate(
      { mobileNumber },
      { $unset: { otp: '', otpTimestamp: '' } }
    );

    return res.status(200).json({ message: 'OTP verified successfully' });
  } else {
    res.setHeader('Allow', ['POST', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
