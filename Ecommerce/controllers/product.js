const productList = (req, res) => {
  res.send(`<p>Fetching all products</p>`);
};

const searchProduct = (req, res) => {
  res.send(`<p>Fetching product with ID:${req.params.id}</p>`);
};

const addProduct = (req, res) => {
  res.send(`<p>Adding a new product</p>`);
};

module.exports.products = productList;
module.exports.searchProduct = searchProduct;
module.exports.addProduct = addProduct;
