const { Items, Category } = require("../models");

const getItemList = async (req, res, next) => {
  try {
    const items = await Items.findAll({
      include: {
        model: Category,
        attributes: ["id", "description"],
      },
    });

    res.status(200).json({
      sucess: true,
      data: items,
    });
  } catch (error) {
    next(error);
  }
};

const addItems = async (req, res, next) => {
  try {
    const { name, price, quantity, categoryId } = req.body;

    const item = await Items.create({
      name: name,
      price: price,
      quantity: quantity,
      categoryId: categoryId,
    });
    res.status(201).json({ sucess: true, data: item });
  } catch (error) {
    next(error);
  }
};

const updateItems = async (req, res, next) => {
  try {
    const { id, quantity } = req.body;
    const item = Items.update(
      {
        quantity: quantity,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(204).json({
      sucess: true,
      data: item,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getItemList,
  addItems,
  updateItems,
};
