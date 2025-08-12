const router = require("express").Router();

const {
  addCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");

// / --get--getCourse
router.get("/", getCourse);
// / --post--addCourse
router.post("/", addCourse);
// /:id --put--updateCourse
router.put("/:id", updateCourse);
// /:id --delete--deleteCourse
router.delete("/:id", deleteCourse);
//exports router
module.exports = {
  router,
};
