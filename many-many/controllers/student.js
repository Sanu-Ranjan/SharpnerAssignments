const { Students } = require("../models");

const { dbErrorHandler, resObject, validateStudent } = require("../utils");

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
  const { error, value } = validateStudent(req.body);

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

  const { error, value } = validateStudent(req.body);

  if (error) return res.status(400).json(resObject.fail("Invalid Data", error));

  try {
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
const del = async (req, res) => {
  const { error, value } = Joi.number().required().validate(req.params.id);

  if (error) return res.status(400).json(resObject.fail("Invalid data", error));

  try {
    const student = await Students.destroy({
      where: {
        id: value,
      },
    });

    if (!student)
      return res
        .status(404)
        .json(resObject.fail("No records found", { id: value }));

    res
      .status(200)
      .json(
        resObject.success("Student record deleted", { rowsEffected: student })
      );
  } catch (error) {
    dbErrorHandler(error, res);
  }
};
module.exports = {
  get,
  add,
  update,
  del,
};
