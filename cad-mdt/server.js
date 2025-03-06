const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Server } = require("socket.io");
const http = require("http");
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
const callRoutes = require("./routes/calls");
app.use("/api/calls", callRoutes);


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Start Server
server.listen(5000, () => console.log("Server running on port 5000"));
