import mongoose from "mongoose";
import { connectionSrt } from "@/models/connection";
import { NumberModel } from "@/models/numberSchema"; 

export default async function handler(req, res) {
  try {
    console.log("Attempting to connect to the database...");
    await mongoose.connect(connectionSrt);
    console.log("DB Connected");

    // const newData = {
    //   numbers: "12345", 
    // };

    // console.log("Attempting to insert data into number collection...");
    // const result = await NumberModel.create(newData);
    // console.log("Data inserted successfully:", result);

    // return res.json({ message: "Data inserted successfully", result });
  } catch (error) {
    console.error("Error handling API request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}