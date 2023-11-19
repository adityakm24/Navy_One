// models/complaint.js
const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  description: String,
  photo_url: String,
  location: String,
  department_id: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
  status: String,
  remarks: String,
  creation_date: Date,
  last_update_date: Date,
});

module.exports = mongoose.model("Complaint", complaintSchema);
