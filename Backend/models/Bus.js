const sequelize = require("../config/database.js");
const { Sequelize } = require("sequelize");

const Bus = sequelize.define(
  "Bus",
  {
    origin: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    destination: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    time: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    type: {
      type: Sequelize.ENUM("Standard", "Executive"),
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  },
  {
    // options
  }
);

module.exports = Bus;
