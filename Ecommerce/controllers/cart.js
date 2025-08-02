const getCartForUser = (req, res) => {
  res.send(`<p>Fetching cart with uder Id:${req.params.userid}</p>`);
};

const addProductToCart = (req, res) => {
  res.send(
    `<p>Adding a product to a cart with user Id:${req.params.userid}</p>`
  );
};

module.exports.getCartForUser = getCartForUser;
module.exports.addProductToCart = addProductToCart;
