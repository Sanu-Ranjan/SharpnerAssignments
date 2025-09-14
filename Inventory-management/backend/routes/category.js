const router = require("express").Router();
const { addCategory, getCategories } = require("../controllers/category");

router.get("/", getCategories);
router.post("/", addCategory);

module.exports = {
  router,
};
