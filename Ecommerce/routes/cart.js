const router = require("express").Router();

router
  .get("/:userid", (req, res) => {
    res.send(`<p>Fetching cart with uder Id:${req.params.userid}</p>`);
  })
  .post("/:userid", (req, res) => {
    res.send(
      `<p>Adding a product to a cart with user Id:${req.params.userid}</p>`
    );
  });

module.exports.router = router;
