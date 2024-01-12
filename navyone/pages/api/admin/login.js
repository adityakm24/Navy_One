// login.js

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/UserLogin.js";
import dbConnect from "@/utils/dbConnect.js";
import dotenv from "dotenv";

dotenv.config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REDIRECT_URL = "/verification-page"; // Specify the URL to redirect to

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { mobileNumber, password } = req.body;

    if (!mobileNumber || mobileNumber.length !== 10 || !password) {
      return res
        .status(400)
        .json({ error: "Invalid mobile number or password" });
    }

    const user = await User.findOne({ mobileNumber });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.mustVerify) {
      // Redirect to the verification page if the user is not verified
      return res.redirect(REDIRECT_URL);
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Assuming the password is successfully verified, generate and send the access token
    const accessToken = generateAccessToken({ mobileNumber });

    return res.status(200).json({ message: "Login successful", accessToken });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

function generateAccessToken(payload) {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { algorithm: "HS256" });
}
