import { getFileById, getFiles } from "../controllers/fileControllers.js";
import express from "express";
const router = express.Router();

router.route("/").get(getFiles);
router.route("/:id").get(getFileById);

export default router;
