const { Students, validate } = require("../models/students");

const { dbErrorHandler, resObject } = require("../utils/index");

const joi = require("joi");

//get list
const get = async (req, res) => {
  try {
    const data = await Students.findAll();
    res
      .status(200)
      .json(resObject.success(`${data.length} Students found`, data));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};
//add

const add = async (req, res) => {
  const { error, value } = validate(req.body);

  if (error) {
    return res.status(400).json(resObject.fail("Invalid Data", error));
  }

  try {
    const student = await Students.create(value);
    res.status(200).json(resObject.success("Student added", student));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

//update
//delete

//input validation

//export controllers
module.exports = {
  get,
  add,
};
