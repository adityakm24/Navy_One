import dbConnect from "../../../utils/dbConnect";
import DepartmentHead from "../../../models/departmentHead";

dbConnect();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const deptHead = await DepartmentHead.create(req.body);
    res.status(201).json(deptHead);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
