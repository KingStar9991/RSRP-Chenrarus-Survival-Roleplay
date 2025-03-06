const express = require("express");
const Call = require("../models/Call");
const router = express.Router();

// Create a new call
router.post("/", async (req, res) => {
  const { caller, description } = req.body;
  const newCall = new Call({ caller, description });
  await newCall.save();
  res.json(newCall);
});

// Assign a call to a unit
router.post("/assign", async (req, res) => {
  const { callId, assignedTo } = req.body;
  const call = await Call.findById(callId);
  if (!call) return res.status(404).json({ error: "Call not found" });

  call.assignedTo = assignedTo;
  call.status = "Assigned";
  await call.save();
  res.json({ message: "Call assigned successfully" });
});

// Get all calls
router.get("/", async (req, res) => {
  const calls = await Call.find();
  res.json(calls);
});

module.exports = router;
