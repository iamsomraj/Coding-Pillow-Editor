import expressAsyncHandler from "express-async-handler";
import File from "../models/fileModel.js";

/**
 * @description fetch all files for user
 * @route GET api/files
 * @access Private
 */
export const getFiles = expressAsyncHandler(async (req, res) => {
  const files = await File.find({ user: req.user._id }).populate(
    "user",
    "id name email"
  );
  if (files) {
    res.status(200).json(files);
  } else {
    res.status(404);
    throw new Error("No files are found");
  }
});

/**
 * @description fetch file by id
 * @route GET api/files/:id
 * @access Public
 */
export const getFileById = expressAsyncHandler(async (req, res) => {
  const file = await File.findById(req.params.id).populate(
    "user",
    "id name email"
  );
  if (file) {
    res.json(file);
  } else {
    res.status(404);
    throw new Error("File not found");
  }
});
