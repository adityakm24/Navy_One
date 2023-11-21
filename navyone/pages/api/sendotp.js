export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { mobileNumber } = req.body;
  
      if (!mobileNumber || mobileNumber.length !== 10) {
        return res.status(400).json({ error: 'Invalid mobile number' });
      }
  
      // Generate a 6-digit OTP
      const otp = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('');
  
      // Your Fast2SMS API key
      const apiKey = process.env.FAST2SMS_API_KEY;
  
      try {
        const response = await fetch('https://www.fast2sms.com/dev/bulkV2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': apiKey
          },
          body: JSON.stringify({
            route: 'otp',
            numbers: mobileNumber,
            variables_values: otp
          })
        });
  
        const data = await response.json();
        if (data.return) {
          return res.status(200).json({ message: 'OTP sent successfully' });
        } else {
            console.log(data)
          return res.status(500).json({ error: 'Failed to send OTP' });
        }
      } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  