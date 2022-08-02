const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"],
    maxlength: [32, "Password must be at most 32 characters"],
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Username is required"],
  },
  type: {
    type: String,
    default: "user",
    enum: ["user", "support", "moderator", "admin"],
  },
  status: { type: String, default: "inactive" },
  isEmailVerified: { type: Boolean, default: false },
  verificationCode: { type: String, default: "" },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      } else {
        user.password = hash;
        next();
      }
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }
      if (!isMatch) {
        return reject("Invalid Credentials.");
      }
      resolve(true);
    });
  });
};

mongoose.model("User", userSchema);
