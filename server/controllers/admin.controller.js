const { reusable } = require("../utils/reusable");
const mongoose = require("mongoose");
const Photo = mongoose.model("Photo");
const User = mongoose.model("User");

exports.getDashboardStats = async (req, res) => {
  try {
    const photos = await Photo.countDocuments({});
    const users = await User.countDocuments({});

    return res.status(200).send({ message: "Success", photos, users });
  } catch (error) {
    console.log(error);
    return res.status(500).send(reusable.error);
  }
};

exports.getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().populate("postedBy");
    return res.status(200).send({ message: "fetched Successfully", photos });
  } catch (error) {
    console.log("getAllPhotos error", error);
    return res.status(500).send(reusable.error);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ type: "user" });
    return res.status(200).send({ message: "fetched Successfully", users });
  } catch (error) {
    console.log("get all users error", error);
    return res.status(500).send(reusable.error);
  }
};
