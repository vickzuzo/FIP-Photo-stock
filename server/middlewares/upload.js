const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const storage = new GridFsStorage({
  url:
    process.env.NODE_ENV === "development"
      ? "mongodb://localhost:27017/photo-stock"
      : process.env.MONGO_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-photo-stock-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-photo-stock-${file.originalname}`,
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
