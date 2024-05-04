// associations.js

const Customer = require('./models/Customer');
const Booking = require('./models/Booking');
const Seat = require('./models/Seat');
const Bus = require('./models/Bus');
const Schedule = require('./models/Schedule');
const Route = require('./models/Route');

// Define associations
Customer.hasMany(Booking);
Booking.belongsTo(Customer);

Booking.belongsTo(Seat);
Seat.hasOne(Booking);

Bus.hasMany(Seat);
Seat.belongsTo(Bus);

Bus.hasMany(Schedule);
Schedule.belongsTo(Bus);

Bus.belongsTo(Route);
Route.hasOne(Bus);
