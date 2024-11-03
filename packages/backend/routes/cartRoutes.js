const express = require("express");
const CC = require("../controllers/cartControllers");
const AC = require("../controllers/authControllers");

const router = express();

router.use(AC.protect);

router.post("/add", CC.addToCart);
router.get("/", CC.getCart);
router.delete("/remove", CC.removeFromCart);
router.delete("/clear", CC.clearCart);

module.exports = router;
