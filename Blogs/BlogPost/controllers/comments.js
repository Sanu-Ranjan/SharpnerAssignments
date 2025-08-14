const { Comments, Blogs } = require("../models");

const { dbErrorHandler, resObject } = require("../utils");

const addComment = async (req, res) => {
  const { id } = req.params;

  const { comm } = req.body;

  try {
    const comment = await Comments.create({
      comm: comm,
      BlogId: id,
    });

    res.status(201).json(resObject.success("Comment added to blog", comment));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

module.exports = {
  addComment,
};
