const util = require("util");
const multer = require("multer");
const {GridFsStorage} = require('multer-gridfs-storage');


var storage = new GridFsStorage({
  url: "mongodb+srv://phanvandat:phanvandat123@cluster0.n8rzr.mongodb.net/ATN-Store",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-bezkoder-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-bezkoder-${file.originalname}`
    };
  }
});