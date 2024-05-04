const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Bus = sequelize.define('Bus', {
  busName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Bus;
