import dbConnect from '@/utils/dbConnect.js'; 
import Complaints from '@/models/complaint.js'; 

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === 'POST') {
    try {
      const savedComplaint = await Complaints.create(req.body);
      res.status(201).json({ success: true, complaint: savedComplaint });
    } catch (error) {
        console.error(error);
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
