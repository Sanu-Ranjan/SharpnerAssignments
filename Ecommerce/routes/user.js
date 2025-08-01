const router = require("express").Router();

router
  .get("/", (req, res) => {
    res.send(`<p>Fetching all users</p>`);
  })
  .get("/:id", (req, res) => {
    res.send(`<p>Fetching user with ID:${req.params.id}</p>`);
  })
  .post("/", (req, res) => {
    res.send(`<p>Adding a new User</p>`);
  });

module.exports.router = router;
