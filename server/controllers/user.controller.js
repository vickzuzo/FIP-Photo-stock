const mongoose = require("mongoose");
const Photo = mongoose.model("Photo");

const { reusable } = require("../utils/reusable");

exports.addPhoto = async (req, res) => {
  const { title, subscription } = req.body;
  const url = req.protocol + "://" + req.get("host");
  try {
    if (!title) {
      return res.status(400).send("Please provide a title for your image!.");
    }
    if (req.file === undefined) {
      return res.status(400).send("Please upload an image");
    }
    const imageUrl = `${url}/files/${req.file.filename}`;
    const photo = await Photo.create({
      postedBy: req.user._id,
      title,
      imageUrl,
      subscription,
    });
    return res.status(201).send({
      message: "photo added Successfully",
      photo,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(reusable.error);
  }
};

exports.getAllPhotos = async (req, res) => {
  const { _id } = req.user;

  try {
    const photos = await Photo.find({ postedBy: _id });
    return res.status(200).send({
      message: "photos retrieved successfully",
      photos,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(reusable.error);
  }
};

exports.updatephoto = async (req, res) => {
  const id = req.params.id;
  const url = req.protocol + "://" + req.get("host");

  const { title, subscription } = req.body;

  try {
    if (!title || !subscription) {
      return res.status(400).send("Please fill all the fields");
    }
    const imageUrl = `${url}/files/${req.file?.filename}`;
    const prevPhoto = await Photo.findById(id);
    const photo = await Photo.findByIdAndUpdate(
      id,
      {
        title,
        imageUrl: req.file !== undefined ? imageUrl : prevPhoto.imageUrl,
      },
      { new: true, useFindAndModify: false }
    );

    return res
      .status(200)
      .send({ message: "Photo Updated Successfully", photo });
  } catch (err) {
    console.log(err);
    return res.status(500).send(reusable.error);
  }
};

exports.deletePhoto = async (req, res) => {
  const id = req.params.id;
  try {
    const photo = await Photo.findById(id);
    if (!photo) {
      return res.status(404).send("photo not found");
    }
    await Photo.findByIdAndDelete(id);
    return res.status(200).send({ message: "Photo deleted successfully", photo });
  } catch (error) {
    console.log(error);
    return res.status(500).send(reusable.error);
  }
};
