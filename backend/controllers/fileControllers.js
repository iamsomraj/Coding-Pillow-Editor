import expressAsyncHandler from "express-async-handler";
import File from "../models/fileModel.js";

/**
 * @description fetch all files
 * @route GET api/files
 * @access Public
 */
export const getFiles = expressAsyncHandler(async (req, res) => {
  const files = await File.find({});
  res.json(files);
});

/**
 * @description fetch file by id
 * @route GET api/files/:id
 * @access Public
 */
export const getFileById = expressAsyncHandler(async (req, res) => {
  const file = await File.findById(req.params.id);
  if (file) {
    res.json(file);
  } else {
    res.status(404);
    throw new Error("File not found");
  }
});
