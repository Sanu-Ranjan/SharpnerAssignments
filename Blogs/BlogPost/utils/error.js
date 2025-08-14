const { resObject } = require("./response");

const dbErrorHandler = (err, res) => {
  return res
    .status(500)
    .json(resObject.fail("Databse operation failed", err.message));
};

module.exports = {
  dbErrorHandler,
};
