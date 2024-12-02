const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

const AppError = require("./utils/appError");
const GEH = require("./controllers/errorControllers");
const productRouter = require("./routes/productRoutes");
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const orderRouter = require("./routes/orderRoutes");
const cartRouter = require("./routes/cartRoutes");

const app = express();

app.use(cors());
// Set security HTTP headers
app.use(helmet());
// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Limit requests from same API
const limiter = rateLimit({
  max: 200,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests, please try again after 1 hour",
});
app.use("v1", limiter);
// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
// Date sanitization against NoSQL query injection
app.use(mongoSanitize());
// Date sanitization against XSS
app.use(xss());
// Prevent parameter pollution
app.use(hpp());
// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
// Routes
app.use("/v1/products", productRouter);
app.use("/v1/auth", authRouter);
app.use("/v1/users", userRouter);
app.use("/v1/reviews", reviewRouter);
app.use("/v1/orders", orderRouter);
app.use("/v1/cart", cartRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(GEH);

module.exports = app;
