import dbConnect from "../../../utils/dbConnect";
import Complaint from "../../../models/complaint";

dbConnect();

export default async function handler(req, res) {
  const { complaintId } = req.query;

  if (req.method !== "PUT") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const updatedComplaint = await Complaint.findByIdAndUpdate(
      complaintId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedComplaint);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
