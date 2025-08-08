const { addEntries, updateEntries } = require("../controllers/student");

const router = require("express").Router();

router.post("/", addEntries);

router.put("/:id", updateEntries);
module.exports.router = router;
