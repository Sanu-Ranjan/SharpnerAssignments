const {
  getExpense,
  addExpense,
  deleteExpense,
  editEntries,
} = require("../controllers/expense");

const router = require("express").Router();

router.get("/", getExpense);
router.post("/", addExpense);
router.delete("/:id", deleteExpense);
router.put("/:id", editEntries);
module.exports.router = router;
