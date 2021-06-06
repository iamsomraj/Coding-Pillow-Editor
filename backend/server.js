const dotenv = require("dotenv");
const express = require("express");
const files = require("./data/files");

dotenv.config();

const app = express();

app.get("/api/files", (req, res) => {
  res.json(files);
});

app.get("/api/files/:id", (req, res) => {
  res.json(files.find((file) => file.id === req.params.id));
});

app.listen(5000, console.log("Server running on port 5000"));
