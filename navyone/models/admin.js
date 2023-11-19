// models/admin.js
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password_hash: String,
});

module.exports = mongoose.model("Admin", adminSchema);
