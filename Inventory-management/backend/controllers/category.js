const { Category } = require("../models");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ sucess: true, data: categories });
  } catch (error) {
    next(error);
  }
};

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
  getCategories,
};
