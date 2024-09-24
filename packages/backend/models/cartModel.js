const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
        totalPrice: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

cartSchema.pre(/^find/, function (next) {
  this.populate({
    path: "userId",
    select: "name photo",
  });
  next();
});
cartSchema.pre("validate", async function (next) {
  const cart = this;

  await cart.populate({
    path: "products.productId",
    select: "name price photo",
  });

  cart.products.forEach((item) => {
    if (item.productId && item.productId.price) {
      item.totalPrice = item.productId.price * item.quantity; // Calculate total price for this product
    } else {
      return next(new Error("Product not found or does not have a price"));
    }
  });

  next();
});

// Virtual field to calculate totalCartPrice
cartSchema.virtual("totalCartPrice").get(function () {
  return this.products.reduce((acc, item) => acc + item.totalPrice, 0);
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
