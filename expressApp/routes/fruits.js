const express = require("express");

const router = express.Router();

router.get("/exotic", (req, res) => {
  res.send("Here is the list of imported fruits available");
});

router.get("/indegenious", (req, res) => {
  res.send("Here is the list of all desi fruits");
});

module.exports.router = router;
