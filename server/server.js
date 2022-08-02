require("dotenv").config();
require("./models/User.model");
require("./models/Photo.model");
const express = require("express");
const cors = require("cors");
const { urlencoded, json } = require("body-parser");
const morgan = require("morgan");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(morgan("dev"));
connectDB();

const conn = mongoose.connection;
conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "photos",
  });
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
});

app.get("/files/:filename", async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (err) {
    console.log(err);
    res.send("Image not found!");
  }
});

app.delete("/files/:filename", async (req, res) => {
  try {
    await gfs.files.deleteOne({ filename: req.params.filename });
    return res.send("success");
  } catch (error) {
    console.log(error);
    return res.send("An unexpected error occurred on the server. Try again.");
  }
});

app.use("/v1", require("./routes/general.route"));
app.use("/v1/auth", require("./routes/auth.route"));
app.use("/v1/user", require("./routes/user.route"));
app.use("/v1/admin", require("./routes/admin.route"));

const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});

process.on("unhandledRejection", (err) => {
  console.log(`an unhandled rejection occurred: ${err}`);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.log(`an uncaught exception occurred: ${err}`);
  process.exit(1);
});

process.on("exit", (code) => {
  console.log(`Process exited with code ${code}`);
});

process.on("SIGINT", () => {
  console.log("Process terminated");
  process.exit(0);
});
