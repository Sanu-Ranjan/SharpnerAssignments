const router = require("express").Router();

const userController = require("../controllers/users");

router.get("/", userController.getAllUsers);

router.post("/", userController.addEntries);

router.put("/:userId", userController.updateEntries);

router.delete("/:userId", userController.deleteEntries);

module.exports.router = router;
