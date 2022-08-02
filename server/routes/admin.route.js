const express = require("express");
const {
  getDashboardStats,
  getAllPhotos,
  getAllUsers,
} = require("../controllers/admin.controller");
const requireAdmin = require("../middlewares/requireAdmin");
const requireAuth = require("../middlewares/requireAuth");

const adminRouter = express.Router();
adminRouter.use(requireAuth);
adminRouter.use(requireAdmin);

adminRouter.route("/get_dashboard_stats").get(getDashboardStats);
adminRouter.route("/get_all_photos").get(getAllPhotos);
adminRouter.route("/get_all_users").get(getAllUsers);

module.exports = adminRouter;
