const jwt = require("jsonwebtoken");

exports.generateAccessToken = (id, email) => {
  return jwt.sign({ _id: id, email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
