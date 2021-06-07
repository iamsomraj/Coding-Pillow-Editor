import express from "express";
import { getFileById, getFiles } from "../controllers/fileControllers.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").get(protect, getFiles);
router.route("/:id").get(protect, getFileById);

export default router;
