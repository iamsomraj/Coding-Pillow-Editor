import dotenv from "dotenv";
import express from "express";
import files from "./data/files.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
connectDB();

app.get("/api/files", (req, res) => {
  res.json(files);
});

app.get("/api/files/:id", (req, res) => {
  res.json(files.find((file) => file.id === req.params.id));
});

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
