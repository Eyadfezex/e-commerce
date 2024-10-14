const express = require("express");
const UC = require("../controllers/userControllers");
const AC = require("../controllers/authControllers");

const router = express.Router();

router.post("/signup", AC.signup);
router.post("/login", AC.login);
router.post("/forgotPassword", AC.forgotPassword);
router.patch("/resetPassword/:token", AC.resetPassword);

// Protect all routes after this middleware
router.use(AC.protect);

router.patch("/updateMyPassword", AC.updatePassword);

router.get("/me", UC.getMe, UC.getUser);

router.patch("/updateMe", UC.uploadUserImage, UC.updateMe);
router.delete("/deleteMe", UC.deleteMe);
// All routes restricted ro admin after this middleware
router.use(AC.restrictTo("admin"));

router.route("/").get(UC.getAllUsers).post(UC.createUser);
router.route("/:id").get(UC.getUser).patch(UC.updateUser).delete(UC.deleteUser);

module.exports = router;
