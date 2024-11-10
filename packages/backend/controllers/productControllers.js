const upload = require("../utils/multer");
const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const HF = require("./handlerFactory");

const uploadProductImage = upload.array("images", 4);

const uploadImages = HF.uploadImages(Product, "Home/products/");

const removeImage = HF.removeImage(Product);

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
  removeImage,
};
