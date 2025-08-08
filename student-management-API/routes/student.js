const {
  studentList,
  findStudent,
  addStudent,
  updateDetails,
  deleteEntries,
} = require("../controllers/student");

const router = require("express").Router();

router.get("/", studentList);

router.get("/:id", findStudent);

router.post("/", addStudent);

router.put("/:id", updateDetails);

router.delete("/:id", deleteEntries);

module.exports.router = router;
