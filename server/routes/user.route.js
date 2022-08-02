const express = require("express");
const {
  addPhoto,
  getAllPhotos,
  updatephoto,
  deletePhoto,
} = require("../controllers/user.controller");
const requireAuth = require("../middlewares/requireAuth");
const upload = require("../middlewares/upload");

const userRouter = express.Router();
userRouter.use(requireAuth);

userRouter.route("/add_photo").post(upload.single("image"), addPhoto);
userRouter.route("/get_all_photos").get(getAllPhotos);
userRouter.route("/update_photo/:id").put(upload.single("image"), updatephoto);
userRouter
  .route("/delete_photo/:id")
  .delete(upload.single("image"), deletePhoto);

module.exports = userRouter;
