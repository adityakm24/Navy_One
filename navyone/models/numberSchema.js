import mongoose from "mongoose";

const numberSchema = new mongoose.Schema({
  numbers: {
    type: String,
    required: true,
  },
});

export const NumberModel = mongoose.models.number || mongoose.model("number", numberSchema);
