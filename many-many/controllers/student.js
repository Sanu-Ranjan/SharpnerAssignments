const { Students, validate } = require("../models/students");

const { dbErrorHandler, resObject } = require("../utils/index");

const Joi = require("joi");

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
const update = async (req, res) => {
  const { error: er, value: id } = Joi.number()
    .required()
    .validate(req.params.id);

  if (er) return res.status(400).json(resObject.fail("Invalid Params", er));

  const { error, value } = validate(req.body);

  if (error) return res.status(400).json(resObject.fail("Invalid Data", error));

  try {
    // res.send(value);
    const student = await Students.update(value, {
      where: {
        id: id,
      },
    });

    if (!student)
      return res
        .status(404)
        .json(resObject.fail("Student not found", { id: id }));

    res.status(200).json(resObject.success("Student data Modified", student));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};
//delete

module.exports = {
  get,
  add,
  update,
};
