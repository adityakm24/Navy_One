import dbConnect from "../../../utils/dbConnect";
import Complaint from "../../../models/complaint";

dbConnect();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const complaints = await Complaint.find({
      department_id: req.query.departmentId,
    });
    res.status(200).json(complaints);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
