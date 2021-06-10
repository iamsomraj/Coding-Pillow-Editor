import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import { errorHandler, pageNotFound } from "./middlewares/error.js";
import fileRoutes from "./routes/fileRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
const isProd = process.env.NODE_ENV === "production";

if (!isProd) {
  app.use(cors());
}

app.use(express.json());

app.use("/api/files", fileRoutes);
app.use("/api/users", userRoutes);

const __dirname = path.resolve();

if (isProd) {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(pageNotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
