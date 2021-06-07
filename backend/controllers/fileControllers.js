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
 * @access Private
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

/**
 * @description create file
 * @route POST api/files/
 * @access Private
 */
export const createFile = expressAsyncHandler(async (req, res) => {
  const { name, language, value } = req.body;

  console.log({ ...req.body });

  const fileExists = await File.findOne({ name, user: req.user._id });

  if (fileExists) {
    res.status(400);
    throw new Error("File with same name already exists");
  }

  const file = await File.create({
    user: req.user._id,
    name,
    value,
    language,
  });

  if (file) {
    res.status(201).json({
      _id: file._id,
      name: file.name,
      langauge: file.langauge,
      value: file.value,
    });
  } else {
    res.status(400);
    throw new Error("Invalid file data");
  }
});
