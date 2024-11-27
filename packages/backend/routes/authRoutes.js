const express = require("express");
// eslint-disable-next-line import/no-extraneous-dependencies
const passport = require("passport");
const AC = require("../controllers/authControllers");

const router = express.Router();

// Google OAuth route
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Google OAuth callback route
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  AC.googleCallback
);

router.post("/signup", AC.signup);
router.post("/login", AC.login);
router.post("/forgotPassword", AC.forgotPassword);
router.patch("/resetPassword/:token", AC.resetPassword);

module.exports = router;
