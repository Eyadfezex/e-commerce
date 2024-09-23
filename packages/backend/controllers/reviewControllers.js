const Review = require("../models/reviewModel");
// const APIFeatures = require('../utils/apiFeatures');
// const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');
const HF = require("./handlerFactory");

const setProductUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.product) {
    req.body.product = req.params.productId;
  }
  if (!req.body.user) {
    req.body.user = req.user.id;
  }
  next();
};

const getAllReviews = HF.getAll(Review);
const getReview = HF.getOne(Review);
const createReview = HF.createOne(Review);
const updateReview = HF.updateOne(Review);
const deleteReview = HF.deleteOne(Review);

module.exports = {
  getAllReviews,
  createReview,
  deleteReview,
  updateReview,
  setProductUserIds,
  getReview,
};
