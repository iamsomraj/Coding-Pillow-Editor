import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import users from "./data/users.js";
import files from "./data/files.js";

import User from "./models/userModel.js";
import File from "./models/fileModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await File.deleteMany();

    const createdUsers = await User.insertMany(users);
    const oneUser = createdUsers[0]._id;

    const localFiles = files.map((file) => {
      return {
        ...file,
        user: oneUser,
      };
    });

    await File.insertMany(localFiles);

    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.error(
      `Something went wrong while importing data : ${error.message}`
    );
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await File.deleteMany();

    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.error(
      `Something went wrong while destroying data : ${error.message}`
    );
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
