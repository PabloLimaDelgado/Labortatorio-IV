const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  email: String,
});

module.exports = mongoose.model("User", userSchema);
