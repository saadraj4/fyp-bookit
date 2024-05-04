const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Seat = sequelize.define('Seat', {
  seatNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seatClass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Seat;
