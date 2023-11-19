import mongoose from "mongoose";

const getnum = new mongoose.Schema({
    numbers:String,
})

export const num = mongoose.models.number || mongoose.model("number",getnum)