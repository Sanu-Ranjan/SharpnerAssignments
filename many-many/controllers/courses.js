const { Courses } = require("../models");
const { dbErrorHandler, validateCourse, resObject } = require("../utils");

//getCourse
const getCourse = async (req, res) => {
  try {
    const courses = await Courses.findAll();
    res
      .status(200)
      .json(resObject.success(`${courses.length} items found`, courses));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

const addCourse = async (req, res) => {
  const { error, value } = validateCourse(req.body);

  if (error) return res.status(400).json(resObject.fail("Invalid data", error));

  try {
    const course = await Courses.create(value);
    res.status(201).json(resObject.success("Course added", course));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

const updateCourse = async (req, res) => {
  const { error, value } = validateCourse(req.body);
  const { id } = req.params;
  if (error) return res.status(400).json(resObject.fail("Invalid data", error));

  try {
    const course = await Courses.update(value, {
      where: {
        id: id,
      },
    });

    if (!course)
      return res
        .status(404)
        .json(resObject.fail("item not found", { at_id: id }));

    res.status(200).json(resObject.success("course updated", { at_id: id }));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Courses.destroy({
      where: {
        id: id,
      },
    });

    if (!course)
      return res
        .status(404)
        .json(resObject.fail("No entry found", { at_id: id }));

    res.status(200).json(resObject.success("entry deleted ", { at_id: id }));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

module.exports = {
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
