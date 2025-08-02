const router = require("express").Router();

const productController = require("../controllers/product");

router
  .get("/", productController.products)
  .get("/:id", productController.searchProduct)
  .post("/", productController.addProduct);

module.exports.router = router;
