const getAllUsers = (req, res) => {
  res.send(`<p>Fetching all users</p>`);
};
const getUserById = (req, res) => {
  res.send(`<p>Fetching user with ID:${req.params.id}</p>`);
};
const addUser = (req, res) => {
  res.send(`<p>Adding a new User</p>`);
};
module.exports.getAllUsers = getAllUsers;
module.exports.addUser = addUser;
module.exports.getUserById = getUserById;
