// models/location.js
const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("Location", locationSchema);
