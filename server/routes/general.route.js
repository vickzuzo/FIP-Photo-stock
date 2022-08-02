const express = require("express");
const {
  getAllPhotos,
  fetchSingleUser,
} = require("../controllers/general.controller");

const generalRouter = express.Router();

generalRouter.route("/get_all_photos/:filter").get(getAllPhotos);
generalRouter.route("/fetch_user/:id").get(fetchSingleUser);

module.exports = generalRouter;
