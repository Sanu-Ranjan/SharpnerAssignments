const express = require("express");

const router = express.Router();

router.get("/:subject", (req, res) => {
  res.send(`Here is the list of all ${req.params.subject} books available`);
});

router.post("/:name", (req, res) => {
  res.send(`${req.params.name} has been added!!!`);
});

module.exports.router = router;
