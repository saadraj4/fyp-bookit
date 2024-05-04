const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Customer = sequelize.define('customer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CNIC: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

module.exports = Customer;
