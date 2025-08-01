const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Here is the list of all available anime books`);
});

router.post("/:name", (req, res) => {
  res.send(`${req.params.name} has been added!!!`);
});

module.exports.router = router;
