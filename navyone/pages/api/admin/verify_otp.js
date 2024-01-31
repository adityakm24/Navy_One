// otp.js

import bcrypt from "bcryptjs";
import fetch from "node-fetch";
import Admin from "@/models/admin"; // Assuming you are using the Admin model
import dbConnect from "@/utils/dbConnect.js";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    // Generate OTP logic
    const { phoneNumber } = req.body;

    if (!phoneNumber || phoneNumber.length !== 10) {
      return res.status(400).json({ error: "Invalid phone number" });
    }

    const otp = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");
    const salt = await bcrypt.genSalt(10);
    const hashedOtp = await bcrypt.hash(otp, salt);
    const otpTimestamp = new Date();

    await Admin.findOneAndUpdate(
      { phoneNumber },
      { otp: hashedOtp, otpTimestamp },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    const apiKey = process.env.FAST2SMS_API_KEY;
    const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify({
        route: "otp",
        numbers: phoneNumber,
        variables_values: otp,
      }),
    });

    const data = await response.json();
    if (data.return) {
      return res.status(200).json({ message: "OTP sent successfully" });
    } else {
      return res.status(500).json({ error: "Failed to send OTP" });
    }
  } else if (req.method === "PUT") {
    // Verify OTP logic
    const { phoneNumber, otp } = req.body;

    const admin = await Admin.findOne({ phoneNumber });
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    const isOtpMatch = await bcrypt.compare(otp, admin.otp);
    if (!isOtpMatch) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    const otpAge = (new Date() - new Date(admin.otpTimestamp)) / 1000 / 60;
    if (otpAge > 3) {
      return res.status(400).json({ error: "OTP expired" });
    }

    // Clear the OTP from the admin document
    await Admin.findOneAndUpdate(
      { phoneNumber },
      { $unset: { otp: "", otpTimestamp: "" } }
    );

    return res.status(200).json({ message: "OTP verified successfully" });
  } else {
    res.setHeader("Allow", ["POST", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
