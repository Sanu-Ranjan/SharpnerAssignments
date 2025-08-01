const router = require("express").Router();

router
  .get("/", (req, res) => {
    res.send(`<p>Fetching all products</p>`);
  })
  .get("/:id", (req, res) => {
    res.send(`<p>Fetching product with ID:${req.params.id}</p>`);
  })
  .post("/", (req, res) => {
    res.send(`<p>Adding a new product</p>`);
  });

module.exports.router = router;
