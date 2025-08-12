const { dbconnect } = require("../config/dbconnect");

const { DataTypes } = require("sequelize");

const Joi = require("joi");

const Students = dbconnect.define("Students", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
});

function validate(data) {
  return schema.validate(data);
}

module.exports = {
  Students,
  validate,
};
