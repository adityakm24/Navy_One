// models/user.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phone: { type: String, unique: true },
  password_hash: String,
  otp: String,
  department_id: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
});

module.exports = mongoose.model("User", userSchema);
