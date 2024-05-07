const sequelize = require("../config/database.js");
const { Sequelize } = require("sequelize");

const Customer = sequelize.define(
  "Customer",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    CNIC: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    contact: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {}
);

module.exports = Customer;
