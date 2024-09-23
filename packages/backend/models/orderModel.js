const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Customer is required"],
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: [true, "Product is required"],
        },
        quantity: {
          type: Number,
          required: [true, "Quantity is required"],
          min: [1, "Quantity must be at least 1"],
        },
        price: {
          type: Number,
        },
      },
    ],
    paymentMethod: {
      type: String,
      required: true,
    },
    shippingAddress: {
      street: String,
      city: String,
      postalCode: String,
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
    path: "customer",
    select: "name photo",
  });
  next();
});
orderSchema.pre("validate", async function (next) {
  const order = this;

  // Populate the product field in orderItems
  await order.populate({
    path: "orderItems.product",
    select: "name photo price",
  });

  // Iterate over each order item to set the price based on the product's price and quantity
  order.orderItems.forEach((item) => {
    if (item.product && item.product.price) {
      item.price = item.product.price * item.quantity; // Set the price as product price * quantity
    } else {
      return next(new Error("Product not found or does not have a price"));
    }
  });
  next();
});

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
