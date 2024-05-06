// associations.js

const Customer = require('./models/Customer');
const Booking = require('./models/Booking');
const Bus = require('./models/Bus');

// Define associations
Bus.hasMany(Booking, { foreignKey: 'BusID' });
Customer.hasMany(Booking, { foreignKey: 'CustomerID' });
Booking.belongsTo(Bus, { foreignKey: 'BusID' });
Booking.belongsTo(Customer, { foreignKey: 'CustomerID' });

