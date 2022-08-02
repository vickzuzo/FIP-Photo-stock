const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const photoSchema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  imageUrl: {
    type: String,
  },
  subscription: {
    type: String,
    default: "free",
  },
  status: { type: String, default: "inactive" },
});

mongoose.model("Photo", photoSchema);
