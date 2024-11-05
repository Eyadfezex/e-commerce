const express = require("express");
const RC = require("../controllers/reviewControllers");
const AC = require("../controllers/authControllers");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(RC.getAllReviews)
  .post(
    AC.protect,
    AC.restrictTo("customer"),
    RC.setProductUserIds,
    RC.createReview
  );



router
  .route("/:id")
  .get(RC.getReview)
  .patch(AC.protect, AC.restrictTo("customer", "admin"), RC.updateReview)
  .delete(AC.protect, AC.restrictTo("customer", "admin"), RC.deleteReview);

module.exports = router;
