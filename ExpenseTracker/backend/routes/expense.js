const {
  getExpense,
  addExpense,
  //deleteExpense,
} = require("../controllers/expense");

const router = require("express").Router();

router.get("/", getExpense);
router.post("/", addExpense);
//router.delete("/:id", deleteExpense);

module.exports.router = router;
