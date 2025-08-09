const { Users } = require("../models/users");

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
  const { name } = req.body;

  try {
    const user = await Users.create({
      name: name,
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

module.exports.getUsers = getUsers;
module.exports.addUser = addUser;
