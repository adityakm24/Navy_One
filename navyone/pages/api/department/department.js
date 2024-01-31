// /pages/api/departments.js
import dbConnect from '@/utils/dbConnect.js';
import Department from '@/models/department.js';

export default async function handler(req, res) {
  await dbConnect();
  
  if (req.method === 'GET') {
    try {
      const departments = await Department.find({}, 'department_id department_name');
      res.status(200).json(departments);
    } catch (error) {
      console.error('Error fetching departments', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
