const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
require("dotenv").config();
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storageClound = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "jpeg", "png"],
  params: {
    folder: "hoadv_nodejs",
  },
});

const storageLocal = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/", (err) => {
      cb(null, "./uploads/");
    });
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadImageClound = multer({ storage: storageClound });
const uploadImageLocal = multer({ storage: storageLocal });

module.exports = { uploadImageClound, uploadImageLocal };
