const express = require("express");
const OC = require("../controllers/orderControllers");
const AC = require("../controllers/authControllers");

const router = express();

router.use(AC.protect);

router.route("/").post(OC.createOrder).get(OC.getMyOrders);

router
  .route("/:id")
  .get(OC.getOneOrder)
  .patch(OC.updateOrderToPaid)
  .delete(OC.deleteOrder);

// Admin-only routes
router.use(AC.restrictTo("admin"));

router.route("/admin/orders").get(OC.getAllOrders);

router
  .route("/admin/order/:id")
  .patch(OC.updateOrderToDelivered)
  .delete(OC.deleteOrder);

module.exports = router;
