const mongoose = require("mongoose");
const slugify = require("slugify");
// const validator = require("validator");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxLength: [100, "Product name must be less than 100 characters"],
      minLength: [3, "Product name must be at least 3 characters"],
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
      maxLength: [500, "Product description must be less than 500 characters"],
      minLength: [10, "Product description must be at least 10 characters"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    images: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    slug: String,

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "product",
  localField: "_id",
});

productSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { upper: true });
  next();
});

productSchema.pre(/^find/, function (next) {
  this.populate({
    path: "seller",
    select: "name -_id",
  });
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
