import express from "express";
import expressAsyncHandler from "express-async-handler";
import File from "../models/fileModel.js";
const router = express.Router();

/**
 * @description fetch all files
 * @route GET api/files
 * @access Public
 */
router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    throw new Error("File not found");

    const files = await File.find({});
    res.json(files);
  })
);

/**
 * @description fetch file by id
 * @route GET api/files/:id
 * @access Public
 */
router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const file = await File.findById(req.params.id);
    if (file) {
      res.json(file);
    } else {
      res.status(404);
      throw new Error("File not found");
    }
  })
);

export default router;
