const mongoose = require("mongoose");

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
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
    slug: String,
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    colors: [
      {
        type: String,
        enum: [
          "#00C12B",
          "#F50606",
          "#F5DD06",
          "#F57906",
          "#06CAF5",
          "#063AF5",
          "#7D06F5",
          "#F506A4",
          "#FFFFFF",
          "#000000",
        ],
        default: ["#FFFFFF", "#000000"],
      },
    ],
    sizes: [
      {
        type: String,
        default: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
        enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
      },
    ],
    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
      min: [1, "Product quantity must be at least 1"],
      default: 1,
    },
    category: {
      type: String,
      enum: ["T-shirts", "Shorts", "Shirts", "Hoodies", "Pants"],
      required: [true, "Product category is required"],
    },
    style: {
      type: String,
      enum: ["Casual", "Party", "Gym", "Formal"],
      required: [true, "Product style is required"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.pre("save", function (next) {
  if (this.isModified("name")) return next();
  this.slug = this.name.toLowerCase().replace(/\s+/g, "-");
  next();
});

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
