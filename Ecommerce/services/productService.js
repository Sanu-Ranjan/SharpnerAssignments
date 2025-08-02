const fs = require("fs");
const path = require("path");

const gettingAllProducts = () => {
  const data = fs.readFileSync(
    path.join(__dirname, "../data/productList.json"),
    "utf-8"
  );
  let products = JSON.parse(data);

  products = products.sort((a, b) => {
    return a.price - b.price;
  });

  return products;
};

const searchProduct = (productId) => {
  const data = fs.readFileSync(
    path.join(__dirname, "../data/productList.json")
  );
  const products = JSON.parse(data);
  console.log(products);
  const filter = products.find((e) => e.id == productId);
  if (filter) {
    return filter;
  } else {
    return { message: "Product not found" };
  }
};

const addProduct = (product) => {
  return {
    product: product,
  };
};

module.exports.gettingAllProducts = gettingAllProducts;
module.exports.searchProduct = searchProduct;
module.exports.addProduct = addProduct;
