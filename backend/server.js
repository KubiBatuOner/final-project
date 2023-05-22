const express = require("express");
const server = express();

server.use(express.json());

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
