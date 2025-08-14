const { Blogs, Comments } = require("../models");

const { dbErrorHandler, resObject } = require("../utils");

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.findAll({ include: Comments });
    res
      .status(200)
      .json(resObject.success(`${blogs.length}Blogs found`, blogs));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

const addBlog = async (req, res) => {
  const { title, author, content } = req.body;

  try {
    const blog = await Blogs.create({
      title: title,
      author: author,
      content: content,
    });
    res.status(200).json(resObject.success(`new blog post added`, blog));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

module.exports = {
  getBlogs,
  addBlog,
};
