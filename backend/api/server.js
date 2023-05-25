const express = require("express");
const server = express();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

server.use(cors(corsOptions));
const authRouter = require("./auth/auth-router");
const sehirRouter = require("./sehir/sehir-router");
const personelRouter = require("./personel/personel-router");

const mw = require("./auth/auth-middleware");

server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/sehir", sehirRouter);
server.use("/api/personel", personelRouter);

server.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
