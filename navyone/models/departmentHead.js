// models/departmentHead.js
const mongoose = require("mongoose");

const departmentHeadSchema = new mongoose.Schema({
  name: String,
  department_name: { type:mongoose.Schema.Types.ObjectId , ref:'Department'},
  phone: String,
  email: { type: String, unique: true },
  password_hash: String,
});

module.exports = mongoose.model("DepartmentHead", departmentHeadSchema);
