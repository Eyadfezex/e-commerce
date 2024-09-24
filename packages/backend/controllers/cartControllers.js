const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const addToCart = catchAsync(async (req, res, next) => {
  const { productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    return next(new AppError("Product not found", 404));
  }
  const cart = await Cart.findOne({ userId: req.user.id });
  if (cart) {
    const productInCart = cart.products.find(
      (item) => item.productId.toString() === productId.toString()
    );
    if (productInCart) {
      productInCart.quantity += quantity;
      await cart.save();
      return res.status(200).json({
        status: "success",
        message: "Product added to cart",
        data: cart,
      });
    } else {
      cart.products.push({ productId, quantity });
      await cart.save();
      return res.status(200).json({ message: "Product added to cart" });
    }
  } else {
    const newCart = new Cart({
      userId: req.user.id,
      products: [{ productId, quantity }],
    });
    await newCart.save();
    return res.status(201).json({ message: "Cart created and product added" });
  }
});

const getCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate({
    path: "products.productId",
    select: "name price photo",
  });
  if (!cart) {
    return next(new AppError("Cart not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: cart,
  });
});

const removeFromCart = catchAsync(async (req, res, next) => {
  const { productId } = req.body;

  const cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    return next(new AppError("No cart found for this user", 404));
  }
  const productInCart = cart.products.filter(
    (item) => item.productId.toString() !== productId
  );

  if (productInCart.length === cart.products.length) {
    return next(new AppError("Product not found in cart", 404));
  }

  cart.products = productInCart;
  await cart.save();
  res.status(200).json({
    status: "success",
    message: "Product removed from cart",
    data: cart,
  });
});

const clearCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    return next(new AppError("No cart found for this user", 404));
  }
  cart.products = [];

  await cart.save();

  res.status(200).json({
    status: "success",
    message: "Cart cleared",
  });
});

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  clearCart,
};
