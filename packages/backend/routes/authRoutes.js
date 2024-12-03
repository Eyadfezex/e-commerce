const express = require("express");

const AC = require("../controllers/authControllers");

const router = express.Router();

<<<<<<< HEAD
router.post("/login/google", AC.OAuth2G /*AC.loginOAuth2G*/);
// router.post("/signup/google", /*AC.signupOAuth2G*/);
=======
router.post("/login/google", AC.OAuth2G);
>>>>>>> b43aa8560d38918ea456aef1005ad8901400c1b9

router.post("/signup", AC.signup);
router.post("/login", AC.login);
router.post("/forgotPassword", AC.forgotPassword);
router.patch("/resetPassword/:token", AC.resetPassword);

module.exports = router;
