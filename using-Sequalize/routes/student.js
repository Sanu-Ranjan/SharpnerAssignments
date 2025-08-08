const { addEntries } = require("../controllers/student");

const router = require("express").Router();

router.post("/", addEntries);

module.exports.router = router;
