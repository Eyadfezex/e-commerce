const mongoose = require("mongoose");
const slugify = require("slugify");

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
    originalPrice: {
      type: Number,
      required: [true, "Product price is required"],
      default: 0,
    },
    discountPrice: {
      type: Number,
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    slug: String,
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    colors: {
      type: Array,
      default: [],
    },
    sizes: [
      {
        type: String,
        default: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.virtual("currentPrice").get(function () {
  return this.originalPrice - this.discountPrice;
});

productSchema.virtual("discountPercentage").get(function () {
  return (this.discountPrice / this.originalPrice) * 100;
});

productSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "product",
  localField: "_id",
});

productSchema.pre("save", function (next) {
  if (this.discountPrice >= this.originalPrice) {
    return next(
      new Error("Discount price must be lower than the original price")
    );
  }
  this.slug = slugify(this.name, { lower: true });
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
