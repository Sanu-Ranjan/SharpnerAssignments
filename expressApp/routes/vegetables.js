const express = require("express");

const router = express.Router();

router.get("/frozen", (req, res) => {
  res.send("Here is the list of frozen vegetables available");
});

router.get("/fresh", (req, res) => {
  res.send("Here is the list of all fresh vegetables");
});

module.exports.router = router;
