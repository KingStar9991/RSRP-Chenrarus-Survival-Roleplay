const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: [String], // Allows multiple roles (Civilian, Police, etc.)
  location: { lat: Number, lng: Number },
});

module.exports = mongoose.model("User", UserSchema);
role: [String] // Example: ["Police", "Dispatch"]

