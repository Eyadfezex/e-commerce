const Product = require("../models/productModel");
// const catchAsync = require("../utils/catchAsync");
// const AppError = require("../utils/appError");
const HF = require("./handlerFactory");

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
};
