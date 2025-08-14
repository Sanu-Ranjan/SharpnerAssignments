const { addComment } = require("../controllers/comments");

const router = require("express").Router();

//post-- add new comment with blog id as params
router.post("/:id", addComment);

module.exports = {
  router,
};
