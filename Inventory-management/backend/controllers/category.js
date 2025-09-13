const { Category } = require("../models");

const addCategory = async (req, res, next) => {
  try {
    const { description } = req.body;
    const category = await Category.create({
      description: description,
    });
    res.status(201).json({
      sucess: true,
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addCategory,
};
