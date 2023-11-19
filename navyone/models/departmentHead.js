// models/departmentHead.js
const mongoose = require("mongoose");

const departmentHeadSchema = new mongoose.Schema({
  name: String,
  department: String,
  phone: String,
  email: { type: String, unique: true },
  password_hash: String,
});

module.exports = mongoose.model("DepartmentHead", departmentHeadSchema);
