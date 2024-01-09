//by sowrabh
import dbConnect from '@/utils/dbConnect.js'; 
import Admin from '@/models/admin.js'; 

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  if (method === 'POST') {
    const { username, password } = req.body;

    try {
      const admin = await Admin.findOne({ username });

      if (!admin) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Use the comparePassword method
      admin.comparePassword(password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }

        const needsProfileCompletion = !admin.email || !admin.phoneNumber;
        res.status(200).json({ 
          message: 'Login successful',
          needsProfileCompletion,
        });
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
