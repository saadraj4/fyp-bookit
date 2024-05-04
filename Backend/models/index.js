
// // Database parameters
// const database = "bookit"
// const username = "root"
// const password = "root"


// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(database, username, password, {
//   dialect: 'mysql',
//   host: 'localhost'
// });


// const Customer = require('./Customer')(sequelize, Sequelize);
// // const Bus = require('./Bus')(sequelize, Sequelize);
// // Import your other models in the same way...

// const models = {
//   // Customer: sequelize.import('./Customer'),
//   // Bus: sequelize.import('./Bus'),
//   // Route: sequelize.import('./Route'),
//   // Seat: sequelize.import('./Seat'),
//   // Booking: sequelize.import('./Booking'),
//   // Schedule: sequelize.import('./Schedule')
//   Customer
// };

// // Define relationships
// // models.Bus.hasMany(models.Seat, { foreignKey: 'busId' });
// // models.Seat.belongsTo(models.Bus, { foreignKey: 'busId' });

// // models.Bus.hasMany(models.Schedule, { foreignKey: 'busId' });
// // models.Schedule.belongsTo(models.Bus, { foreignKey: 'busId' });

// // models.Customer.hasMany(models.Booking, { foreignKey: 'customerId' });
// // models.Booking.belongsTo(models.Customer, { foreignKey: 'customerId' });

// // models.Seat.hasMany(models.Booking, { foreignKey: 'seatId' });
// // models.Booking.belongsTo(models.Seat, { foreignKey: 'seatId' });

// Object.keys(models).forEach(modelName => {
//   if ('associate' in models[modelName]) {
//     models[modelName].associate(models);
//   }
// });

// models.sequelize = sequelize;
// models.Sequelize = Sequelize;

// module.exports = models;
