const router = require("express").Router();
const { getBlogs, addBlog } = require("../controllers/blogs");

//get--get all blogs along with comments
router.get("/", getBlogs);

//post--post new blogs
router.post("/", addBlog);

module.exports = {
  router,
};
