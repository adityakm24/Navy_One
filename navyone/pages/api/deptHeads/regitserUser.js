import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/user";

dbConnect();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const user = await User.create({
      ...req.body,
      // You might need additional logic for setting a default password or OTP
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
