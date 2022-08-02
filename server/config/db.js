const mongoose = require("mongoose");

const mongoDBString =
  process.env.NODE_ENV === "development"
    ? "mongodb://localhost:27017/photo-stock"
    : process.env.MONGO_URI ?? "";

const connectDB = async () => {
  await mongoose
    .connect(mongoDBString, {
      useUnifiedTopology: true,
    })
    .then((x) => {
      console.log(`connected to database! === ${x.connections[0].name}`);
    })
    .catch((err) => {
      console.error("Error connecting to mongo", err.reason);
    });
};

module.exports = connectDB;
