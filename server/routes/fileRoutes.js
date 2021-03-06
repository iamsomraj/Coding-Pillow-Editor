import express from "express";
import {
  getFileById,
  getFiles,
  createFile,
  updateFile,
  deleteFile,
} from "../controllers/fileControllers.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").get(protect, getFiles);
router.route("/").post(protect, createFile);
router
  .route("/:id")
  .get(protect, getFileById)
  .put(protect, updateFile)
  .delete(protect, deleteFile);

export default router;
