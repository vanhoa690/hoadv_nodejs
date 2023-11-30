const express = require("express");
const router = express.Router();

const uploadController = require("../controllers/UploadController");
const {
  uploadImageClound,
  uploadImageLocal,
} = require("../middlewares/uploadImage");

router.post(
  "/single/clound",
  uploadImageClound.single("image"),
  uploadController.uploadSingleImage
);

router.post(
  "/single/local",
  uploadImageLocal.single("image"),
  uploadController.uploadSingleImage
);

module.exports = router;
