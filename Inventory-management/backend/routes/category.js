const router = require("express").Router();
const { addCategory } = require("../controllers/category");

router.post("/", addCategory);

module.exports = {
  router,
};
