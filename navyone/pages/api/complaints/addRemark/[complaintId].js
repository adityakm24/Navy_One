import dbConnect from "../../../utils/dbConnect";
import Complaint from "../../../models/complaint";

dbConnect();

export default async function handler(req, res) {
  const { complaintId } = req.query;

  if (req.method !== "PUT") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const complaint = await Complaint.findByIdAndUpdate(
      complaintId,
      { $set: { remarks: req.body.remarks } },
      { new: true }
    );
    if (!complaint) {
      return res.status(404).end(); // Not Found
    }
    res.status(200).json(complaint);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
    