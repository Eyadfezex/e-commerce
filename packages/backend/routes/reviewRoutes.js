const express = require("express");
const RC = require("../controllers/reviewControllers");
const AC = require("../controllers/authControllers");

const router = express.Router({ mergeParams: true });

router.use(AC.protect);

router
  .route("/")
  .get(RC.getAllReviews)
  .post(AC.restrictTo("customer"), RC.setProductUserIds, RC.createReview);

router
  .route("/:id")
  .get(RC.getReview)
  .patch(AC.restrictTo("customer", "admin"), RC.updateReview)
  .delete(AC.restrictTo("customer", "admin"), RC.deleteReview);

module.exports = router;
