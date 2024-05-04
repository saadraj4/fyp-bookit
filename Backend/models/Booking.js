const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Booking = sequelize.define('Booking', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2), // Assuming price is stored as a decimal
    allowNull: false,
  },
});

module.exports = Booking;
