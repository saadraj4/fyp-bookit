const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Route = sequelize.define('Route', {
  startLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Route;
