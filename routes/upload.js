const express = require("express");
const router = express.Router();

const uploadController = require("../controllers/UploadController");
const uploadImage = require("../middlewares/uploadImage");

router.post(
  "/single",
  uploadImage.single("image"),
  uploadController.uploadSingleImage
);

module.exports = router;
