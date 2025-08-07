const router = require("express").Router();

const studentController = require("../controllers/students");

router.post("/", studentController.addEntries);

module.exports.router = router;
