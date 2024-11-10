const multer = require("multer");
const AppError = require("./appError");

const MS = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const Id = req.params.id || "new";
    const filename = `image-${Id}-${Date.now()}-${Math.random()
      .toString(36)
      .substring(7)}.${ext}`;
    cb(null, filename);
  },
});

const MF = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images", 400), false);
  }
};

const upload = multer({
  storage: MS,
  fileFilter: MF,
});

module.exports = upload;
