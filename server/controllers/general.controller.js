const mongoose = require("mongoose");
const { reusable } = require("../utils/reusable");
const Photo = mongoose.model("Photo");
const User = mongoose.model("User");

exports.getAllPhotos = async (req, res) => {
  const { filter } = req.params;

  try {
    if (!filter) {
      return res.status(400).send("Please provide a valid filter");
    }

    const photos = await Photo.find({ subscription: filter });
    return res.status(200).send({ message: "fetched Successfully", photos });
  } catch (error) {
    console.log("getAllPhotos error", error);
    return res.status(500).send(reusable.error);
  }
};

exports.fetchSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    return res.status(200).send({ message: "User fetched Successfully", user });
  } catch (err) {
    console.log(err);
    return res.status(500).send(reusable.error);
  }
};
