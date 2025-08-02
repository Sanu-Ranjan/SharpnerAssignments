const productServices = require("../services/productService");

const productList = (req, res) => {
  let productList = productServices.gettingAllProducts(); //sorted by price
  res.json(productList);
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
