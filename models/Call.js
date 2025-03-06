const mongoose = require("mongoose");

const CallSchema = new mongoose.Schema({
  caller: String,
  description: String,
  assignedTo: String,
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Call", CallSchema);
