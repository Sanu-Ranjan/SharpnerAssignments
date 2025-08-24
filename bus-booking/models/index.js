const { Buses } = require("./buses");
const { Users } = require("./users");
const { Bookings } = require("./bookings");

Users.hasMany(Bookings);

Buses.hasMany(Bookings);
module.exports = {
  Bookings,
  Buses,
  Users,
};
