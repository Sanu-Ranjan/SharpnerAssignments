const { Users, Bookings } = require("../models");
const { dbErrorHandler, resObject } = require("../utils");

const addUsers = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await Users.create({
      name: name,
      email: email,
    });
    res.status(201).json({
      success: true,
      data: user,
      message: "User added succesfully",
    });
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

const getUsers = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findByPk(id, { include: Bookings });
    res.status(200).json(resObject.success("Found", user));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

module.exports = {
  addUsers,
  getUsers,
};
