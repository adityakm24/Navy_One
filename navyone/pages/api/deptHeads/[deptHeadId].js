import dbConnect from "../../../utils/dbConnect";
import DepartmentHead from "../../../../models/departmentHead";

dbConnect();

export default async function handler(req, res) {
  const { deptHeadId } = req.query;

  if (req.method !== "DELETE") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const deletedDeptHead = await DepartmentHead.findByIdAndDelete(deptHeadId);
    if (!deletedDeptHead) {
      return res.status(404).end(); // Not Found
    }
    res.status(204).end(); // No Content
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
