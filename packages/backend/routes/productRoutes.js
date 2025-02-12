const express = require("express");
const PC = require("../controllers/productControllers");
const AC = require("../controllers/authControllers");

const reviewRouter = require("./reviewRoutes");

const router = express();

router.use("/:productId/reviews", reviewRouter);

router
  .route("/")
  .get(PC.getAllProducts)
  .post(
    AC.protect,
    AC.restrictTo("admin", "seller"),
    AC.setSeller,
    PC.uploadProductImage,
    PC.uploadImages,
    PC.createProduct
  );

router.route("/new").get(PC.getNewArrivalProducts);

router
  .route("/:id")
  .get(PC.getOneProduct)
  .patch(
    AC.protect,
    AC.restrictTo("admin", "seller"),
    PC.uploadProductImage,
    PC.uploadImages,
    PC.updateProduct
  )
  .delete(AC.protect, AC.restrictTo("admin", "seller"), PC.deleteProduct);

router
  .route("/:id/removeImage")
  .patch(AC.protect, AC.restrictTo("admin", "seller"), PC.removeImage);

module.exports = router;
