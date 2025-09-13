const {
  getItemList,
  addItems,
  addCategory,
  updateItems,
} = require("../controllers/inventory");
const router = require("express").Router();

router.get("/", getItemList);
router.post("/", addItems);
router.put("/", updateItems);

module.exports = {
  router,
};
