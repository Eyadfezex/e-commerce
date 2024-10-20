const multer = require("multer");
// eslint-disable-next-line import/no-extraneous-dependencies
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const cloudinary = require("../utils/cloudinary");
const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const HF = require("./handlerFactory");

// const MS = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "Home/products", // The folder in Cloudinary
//     allowedFormats: ["jpeg", "png", "jpg", "gif"],
//   },
// });

const MS = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/products");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const productId = req.params.id;
    cb(null, `product-${productId}-${Date.now()}.${ext}`);
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

const uploadProductImage = upload.array("images", 4);

const uploadImages = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    req.files.forEach((file) => {
      product.images.push(file.filename);
    });

    await product.save();

    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } else {
    return next();
  }
});

const getAllProducts = HF.getAll(Product);
const getOneProduct = HF.getOne(Product, { path: "reviews" });
const createProduct = HF.createOne(Product);
const updateProduct = HF.updateOne(Product);
const deleteProduct = HF.deleteOne(Product);

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadProductImage,
  uploadImages,
};
