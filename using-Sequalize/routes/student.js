const {
  addEntries,
  updateEntries,
  deleteEntries,
} = require("../controllers/student");

const router = require("express").Router();

router.post("/", addEntries);

router.put("/:id", updateEntries);

router.delete("/:id", deleteEntries);

module.exports.router = router;
