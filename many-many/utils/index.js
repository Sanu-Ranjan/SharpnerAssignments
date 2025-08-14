const { dbErrorHandler } = require("./dberror");
const { resObject } = require("./response");
const {
  validateCourse,
  validateStudent,
  validateIdCard,
} = require("./validator");

module.exports = {
  dbErrorHandler,
  resObject,
  validateCourse,
  validateStudent,
  validateIdCard,
};
