const upload = require("../utils/multer");
const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const HF = require("./handlerFactory");

const uploadProductImage = upload.array("images", 4);

const uploadImages = HF.uploadImages(Product, "Home/products/");

const removeImage = HF.removeImage(Product);

const getNewArrivalProducts = catchAsync(async (req, res, next) => {
  const product = await Product.find().sort({ createdAt: -1 }).limit(10);
  const totalProducts = await Product.countDocuments();
  res.status(200).json({
    status: "success",
    results: product.length,
    data: {
      totalProducts,
      product,
    },
  });
});
const searchProducts = catchAsync(async (req, res, next) => {
  const { query } = req.query;
  if (!query) {
    res.status(404).json({
      status: "fail",
      message: "Invalid search query",
    });
  }

  const searchQuery = query.toString().trim();

  const products = await Product.find({
    $or: [
      { name: { $regex: searchQuery, $options: "i" } },
      { description: { $regex: searchQuery, $options: "i" } },
      { category: { $regex: searchQuery, $options: "i" } },
    ],
  });
  res.status(200).json({
    status: "success",
    results: products.length,
    data: products,
  });
});

const filterProducts = catchAsync(async (req, res, next) => {
  const query = req.query;
  let filter = {};

  if (query.category) {
    filter.category = query.category;
  }

  if (query.style) {
    filter.style = query.style;
  }
  if (query.colors) {
    filter.colors = query.colors;
  }
  if (query.sizes) {
    filter.sizes = query.sizes;
  }
  if (query.minPrice || query.maxPrice) {
    filter.currentPrice = {};
    if (query.minPrice) {
      filter.currentPrice.$gte = parseFloat(query.minPrice);
    }
    if (query.maxPrice) {
      filter.currentPrice.$lte = parseFloat(query.maxPrice);
    }
  }
  if (query.ratingsAverage) {
    filter.ratingsAverage = { $gte: parseFloat(query.ratingsAverage) };
  }

  const products = await Product.find(filter);
  
  if (!products || products.length === 0) {
    return res.status(404).json({
      status: "fail",
      message: "No products found matching the filters.",
    });
  }

  res.status(200).json({
    status: "success",
    results: products.length,
    data: products,
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
  searchProducts,
  filterProducts,
};
