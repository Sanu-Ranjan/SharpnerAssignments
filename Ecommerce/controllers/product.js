const productServices = require("../services/productService");

const path = require("path");

const productList = (req, res) => {
  let productList = productServices.gettingAllProducts(); //sorted by price
  res.sendFile(path.join(__dirname, "../views/products.html"));
};

const searchProduct = (req, res) => {
  console.log(req.params.id);
  const product = productServices.searchProduct(req.params.id);
  res.json(product);
};

const addProduct = (req, res) => {
  let status = productServices.addProduct();
  res.json(status);
};

module.exports.products = productList;
module.exports.searchProduct = searchProduct;
module.exports.addProduct = addProduct;
