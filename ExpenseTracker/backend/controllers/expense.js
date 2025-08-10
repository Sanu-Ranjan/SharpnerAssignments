const { Expense } = require("../models/expense");

const { Op, where } = require("sequelize");

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

const getExpense = async (req, res) => {
  try {
    const expense = await Expense.findAll();
    res.status(200).json({
      success: true,
      data: expense,
      message: `${expense.length} Expenses found`,
    });
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

const addExpense = async (req, res) => {
  const { amount, description, category } = req.body;

  try {
    const expense = await Expense.create({
      amount: amount,
      description: description,
      category: category,
    });
    res.status(201).json({
      success: true,
      data: expense,
      message: "Expense added succesfully",
    });
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;

  try {
    const expense = await Expense.destroy({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    if (!expense)
      return res.status(404).json({
        success: false,
        error: "No records found",
        details: {
          id: id,
        },
      });

    res.status(200).json({
      success: true,
      data: expense,
      message: "Record deleted succesfully",
    });
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

const editEntries = async (req, res) => {
  const { id } = req.params;
  const { amount, description, category } = req.body;

  try {
    const expense = await Expense.update(
      {
        amount: amount,
        description: description,
        category: category,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (!expense)
      return res.status(404).json({
        success: false,
        error: "No records found",
        details: {
          id: id,
        },
      });

    res.status(200).json({
      success: true,
      data: expense,
      mesage: "Expense Updated",
    });
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

module.exports.getExpense = getExpense;
module.exports.addExpense = addExpense;
module.exports.deleteExpense = deleteExpense;
module.exports.editEntries = editEntries;
