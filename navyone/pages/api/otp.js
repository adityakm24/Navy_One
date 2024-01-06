// handler.js

import bcrypt from 'bcryptjs';
import fetch from 'node-fetch';
import jwt from 'jsonwebtoken';
import User from '@/models/UserLogin.js'; 
import dbConnect from '@/utils/dbConnect.js'; 
import dotenv from 'dotenv';

dotenv.config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET 
const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY 

const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET 
const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY 

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
      // Assuming the user is successfully verified, generate and send the JWT
      const accessToken = generateAccessToken({ mobileNumber });
      const refreshToken = generateRefreshToken({ mobileNumber });

      return res.status(200).json({ message: 'OTP sent successfully', accessToken, refreshToken });
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

    // Assuming the OTP is successfully verified, generate and send the new access token
    const accessToken = generateAccessToken({ mobileNumber });
    
    return res.status(200).json({ message: 'OTP verified successfully', accessToken });
  } else {
    res.setHeader('Allow', ['POST', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

function generateAccessToken(payload) {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { algorithm: 'HS256', expiresIn: ACCESS_TOKEN_EXPIRY });
}

function generateRefreshToken(payload) {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, { algorithm: 'HS256', expiresIn: REFRESH_TOKEN_EXPIRY });
}
