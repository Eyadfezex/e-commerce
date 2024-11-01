const multer = require("multer");
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");
const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const HF = require("./handlerFactory");

const MS = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/products");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const productId = req.params.id || "new";
    const filename = `product-${productId}-${Date.now()}-${Math.random()
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

const uploadProductImage = upload.array("images", 4);

const uploadImages = catchAsync(async (req, res, next) => {
  if (!req.files || req.files.length === 0) {
    return next();
  }

  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new AppError("No product found with that ID", 404));
  }

  try {
    const imageFiles = req.files.filter((file) =>
      file.mimetype.startsWith("image/")
    );

    if (imageFiles.length === 0) {
      return next(
        new AppError("Only image files are allowed please try again", 400)
      );
    }

    const uploadPromises = imageFiles.map((file) =>
      cloudinary.uploader.upload(file.path, { folder: "Home/products/" })
    );

    const uploadResults = await Promise.all(uploadPromises);
    uploadResults.forEach((result) => {
      product.images.push(result.secure_url);
    });

    await product.save();

    res.status(200).json({
      status: "success",
      message: "Images uploaded and saved successfully.",
      data: {
        product,
      },
    });
  } catch (error) {
    return next(new AppError("Error uploading images", 500));
  }
});

const getNewArrivalProducts = catchAsync(async (req, res, next) => {
  const product = await Product.find().sort({ createdAt: -1 }).limit(10);
  res.status(200).json({
    status: "success",
    results: product.length,
    data: {
      product,
    },
  });
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
  getNewArrivalProducts,
};
