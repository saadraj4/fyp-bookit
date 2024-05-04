const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Schedule = sequelize.define('Schedule', {
  departureTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  dayOfOperation: {
    type: DataTypes.STRING, // You can adjust this based on your specific requirements
  },
});

module.exports = Schedule;
