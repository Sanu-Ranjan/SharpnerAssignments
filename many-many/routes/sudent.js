const studentController = require("../controllers/student");

const router = require("express").Router();

//import student ontroller

// get student list --student.get
router.get("/", studentController.get);
// post -- add student --student.add
router.post("/", studentController.add);
// put --update student  --student.update
router.put("/:id", studentController.update);
// delete --delte student --student.delete

module.exports = {
  router,
};
