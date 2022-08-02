const express = require("express");
const {
  login,
  register,
  verifyAccount,
  forgotPassword,
  confirmResetCode,
  resetPassword,
} = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.route("/login").post(login);
authRouter.route("/register").post(register);
authRouter.route("/verify_account").post(verifyAccount);
authRouter.route("/forgot_password").post(forgotPassword);
authRouter.route("/confirm_reset_code").post(confirmResetCode);
authRouter.route("/reset_password").post(resetPassword);

module.exports = authRouter;
