const express = require("express");

const AC = require("../controllers/authControllers");

const router = express.Router();

router.post("/login/google", AC.OAuth2G /*AC.loginOAuth2G*/);
// router.post("/signup/google", /*AC.signupOAuth2G*/);

router.post("/signup", AC.signup);
router.post("/login", AC.login);
router.post("/forgotPassword", AC.forgotPassword);
router.patch("/resetPassword/:token", AC.resetPassword);

module.exports = router;
