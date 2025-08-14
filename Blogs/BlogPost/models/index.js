const { Blogs } = require("./blogs");
const { Comments } = require("./comments");

Blogs.hasMany(Comments);
Comments.belongsTo(Blogs);

module.exports = {
  Blogs,
  Comments,
};
