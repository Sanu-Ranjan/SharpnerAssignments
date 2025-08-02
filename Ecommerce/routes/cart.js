const router = require("express").Router();
const cartController = require("../controllers/cart");
router
  .get("/:userid", cartController.getCartForUser)
  .post("/:userid", cartController.addProductToCart);

module.exports.router = router;
