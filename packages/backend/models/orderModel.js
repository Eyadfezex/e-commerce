const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Customer is required"],
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          min: [1, "Quantity must be at least 1"],
        },
        price: {
          type: Number,
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      enum: ["credit card", "paypal", "cash on delivery"],
      required: true,
    },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
    },
    tax: {
      type: Number,
      default: 0.0,
    },
    total: {
      type: Number,
      default: 0.0,
    },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    deliveredAt: {
      type: Date,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "userId",
    select: "name photo",
  });
  next();
});
orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "orderItems.product",
    select: "name photo price",
  });
  next();
});
// orderSchema.pre("validate", async function (next) {
//   const order = this;

//   // Populate the product field in orderItems
//   await order.populate({
//     path: "orderItems.product",
//     select: "name photo price",
//   });

//   // Iterate over each order item to set the price based on the product's price and quantity
//   order.orderItems.forEach((item) => {
//     if (item.product && item.product.price) {
//       item.price = item.product.price * item.quantity; // Set the price as product price * quantity
//     } else {
//       return next(new Error("Product not found or does not have a price"));
//     }
//   });
//   next();
// });

orderSchema.pre("save", async function (next) {
  const order = this;
  const itemsTotal = order.orderItems.reduce(
    (acc, item) => acc + item.price,
    0
  );
  order.total = itemsTotal + order.tax;
  next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
