const Order = require("../models/orderModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const HF = require("./handlerFactory");

const createOrder = catchAsync(async (req, res, next) => {
  const { orderItems, shippingAddress, paymentMethod } = req.body;

  if (!orderItems || orderItems.length === 0) {
    return next(new AppError("No order items found", 400));
  }

  const order = await Order.create({
    orderItems,
    shippingAddress,
    paymentMethod,
    customer: req.user._id,
  });
  res.status(201).json({
    status: "success",
    message: "Order created successfully",
    data: {
      order,
    },
  });
});

const getOneOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.id)
    .populate("customer", "name email")
    .populate({
      path: "orderItems",
      populate: {
        path: "product",
        select: "name price",
      },
    });
  if (!order) {
    return next(new AppError("Order not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: order,
  });
});

const getMyOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find({
    customer: req.user._id,
  }).sort("-createdAt");
  res.status(200).json({
    status: "success",
    results: orders.length,
    data: orders,
  });
});
// i think i will use that in cart after payment methods is done
const updateOrderToPaid = catchAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new AppError("Order not found", 404));
  }

  if (order.isPaid) {
    return next(new AppError("Order is already paid", 400));
  }
  order.isPaid = true;
  order.paidAt = Date.now();
  order.paymentResult = {
    id: req.body.id,
    status: req.body.status,
    update_time: req.body.update_time,
    email_address: req.body.email_address,
  };

  const updateOrder = await order.save();

  res.status(200).json({
    status: "success",
    data: updateOrder,
  });
});

const updateOrderToDelivered = catchAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new AppError("Order not found", 404));
  }
  // Check if order is already delivered
  if (order.isDelivered) {
    return next(new AppError("Order is already delivered", 400));
  }
  // Update order to delivered
  order.isDelivered = true;
  order.deliveredAt = Date.now();

  const updateOrder = await order.save();
  res.status(200).json({
    status: "success",
    data: updateOrder,
  });
});
// Admin controllers
const getAllOrders = HF.getAll(Order, {
  path: "customer",
  select: "name email",
});

const deleteOrder = HF.deleteOne(Order);
const updateOrder = HF.updateOne(Order);

module.exports = {
  createOrder,
  getOneOrder,
  getMyOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
  deleteOrder,
  updateOrder,
};
