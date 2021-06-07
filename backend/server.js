import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import { errorHandler, pageNotFound } from "./middlewares/error.js";
import fileRoutes from "./routes/fileRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use("/api/files", fileRoutes);



app.use(pageNotFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
