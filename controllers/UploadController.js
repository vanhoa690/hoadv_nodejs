class UploadController {
  uploadSingleImage(req, res) {
    try {
      if (!req.file) throw Error("No file uploaded!");
      res
        .status(200)
        .json({ message: "Upload Image Successfull", imageUrl: req.file.path });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new UploadController();
