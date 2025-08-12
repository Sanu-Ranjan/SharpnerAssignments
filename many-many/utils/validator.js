const Joi = require("joi");

const courseSchema = Joi.object({
  course: Joi.string().required().min(3).max(30),
});

const studentSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
});

function validateCourse(body) {
  return courseSchema.validate(body);
}

function validateStudent(body) {
  return studentSchema.validate(body);
}

module.exports = {
  validateCourse,
  validateStudent,
};
