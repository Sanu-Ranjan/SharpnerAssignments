const { Category } = require("./category");
const { Items } = require("./items");

Category.hasMany(Items);
Items.belongsTo(Category);

module.exports = {
  Category,
  Items,
};
