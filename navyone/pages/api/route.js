import { connectionSrt , connectionSrt1  } from "@/models/connection";
import { num } from "@/models/getnum";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  try {
    console.log("Attempting to connect to the database...");
    await mongoose.connect(connectionSrt1); 
    console.log("DB Connected");
    
    console.log("Attempting to execute Demo.find()...");
    const dat = await num.find()
    console.log("Query executed successfully");

    return res.json({ result: dat });
  } catch (error) {
    console.error("Error handling API request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

