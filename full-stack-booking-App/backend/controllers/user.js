const { Users } = require("../models/user");
const { Op } = require("sequelize");
const dbErrorHandler = (err, res) => {
  res.status(500).json({
    success: false,
    error: "Database operation failed",
    details: {
      error: err,
      message: err.message,
    },
  });
};
const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json({
      success: true,
      data: users,
      message: `${users.length} Users found`,
    });
  } catch (error) {
    dbErrorHandler(error, res);
  }
};
const addUser = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const user = await Users.create({
      name: name,
      email: email,
      phone: phone,
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

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Users.destroy({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    if (!user)
      return res.status(404).json({
        success: false,
        error: "User not found",
        details: {
          id: id,
        },
      });

    res.status(200).json({
      success: true,
      data: user,
      message: "User deleted succesfully",
    });
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

module.exports.getUsers = getUsers;
module.exports.addUser = addUser;
module.exports.deleteUser = deleteUser;
