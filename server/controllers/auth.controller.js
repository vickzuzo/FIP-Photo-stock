const mongoose = require("mongoose");
const { generateAccessToken } = require("../utils/generateAccessToken");
const { generateCode } = require("../utils/generateCode");
const { reusable } = require("../utils/reusable");
const User = mongoose.model("User");
const { sendMail } = require("../utils/sendMail");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).send("Please provide a valid email and password");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send("Email not found!, Please create an acount to continue.");
    }

    if (!user.isEmailVerified) {
      return res.status(400).send("Please verify your email address.");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).send("Invalid credentials!, Please try again.");
    }

    const accessToken = generateAccessToken(user._id, user.email);
    return res
      .status(200)
      .send({ message: "Logged in successfully", user, accessToken });
  } catch (error) {
    console.log("login error", error);
    return res.status(500).send(error);
  }
};

exports.register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    if (!email || !password || !username) {
      return res
        .status(400)
        .send("Please provide a valid email, password and username");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).send("Email already in use!!");
    }
    const verificationCode = generateCode();

    const user = await User.create({
      email,
      password,
      username,
      verificationCode,
    });

    await sendMail({
      to: email,
      subject: "Verify your email",
      text: `Dear ${username}, Your verification code is ${verificationCode}, use the code above to complete your registration`,
    });

    return res
      .status(201)
      .send({ message: "Account created Successfully!", user });
  } catch (error) {
    console.log(error);
    return res.status(500).send(reusable.error);
  }
};

exports.verifyAccount = async (req, res) => {
  const { email, code } = req.body;
  if (!email || !code) {
    return res
      .status(400)
      .send("Please provide a valid email and vefication code");
  }

  try {
    const user = await User.findOne({ email }).select("-password");
    if (!user) {
      return res.status(404).send("Email not found!");
    }
    if (user.verificationCode !== code) {
      return res.status(400).send("Incorrect Verification Code");
    }

    await User.findOneAndUpdate(
      { email },
      { isEmailVerified: true, status: "active" },
      { new: true, useFindAndModify: false }
    ).then(async (doc) => {
      await sendMail({
        to: email,
        subject: "Welcome ",
        text: `Dear ${doc.username}, We welcome you to photo stock, a platform to share your art ideas and cr8tivity.`,
      });
      return res
        .status(200)
        .send({ message: "Account verified successfully!", user: doc });
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("An unexpected error occured!. Please try again.");
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).send("Please provide a valid email");
    }
    const verificationCode = generateCode();
    const user = await User.findOne({ email }).select("-password");
    if (!user) {
      return res
        .status(404)
        .send(
          "Email not found, Please confirm your email address and try again."
        );
    }
    await User.findOneAndUpdate(
      { email },
      { verificationCode },
      { new: true, useFindAndModify: false }
    ).then(async (doc) => {
      await sendMail({
        to: email,
        subject: "Reset your account password",
        text: `Dear ${doc.username}, Your account password reset code is ${verificationCode}, use the code above to reset your password. If you did not initiate this request, please ignore this email.`,
      });
      res.status(200).send("Verification code sent successfully!");
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send("An unexpected error occured!. Please try again.");
  }
};

exports.confirmResetCode = async (req, res) => {
  const { email, code } = req.body;
  try {
    const user = await User.findOne({ email }).select("-password");
    if (!user) {
      return res.status(404).send("Email not found!");
    }
    const resetCode = user.verificationCode;
    if (resetCode === code) {
      res.send({ success: true, user });
    } else {
      return res.status(400).send("Incorrect Verification Code");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

exports.resetPassword = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Please provide a valid email and password");
  }
  const user = await User.findOne({ email }).select("-password");
  if (!user) {
    return res.status(404).send("Email not found!");
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) {
        return next(err);
      } else if (user.password === hash) {
        return res
          .status(400)
          .send("New password cannot be the same as old password");
      } else {
        await User.findOneAndUpdate(
          { email },
          { password: hash },
          { new: true, useFindAndModify: false }
        ).then(async (doc) => {
          await sendMail({
            to: email,
            subject: "Your Account Password was reset successfully",
            text: `Dear ${doc.username}, Your account password has been reset successfully.`,
          });
          res.status(200).send("Password reset successfully!");
        });
      }
    });
  });
};
