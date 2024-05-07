const sequelize = require("../config/database.js");
const { Sequelize } = require("sequelize");

const Booking = sequelize.define(
  "Booking",
  {
    seatNumber: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    BusID: {
      type: Sequelize.INTEGER,
      references: {
        model: "Bus",
        key: "id",
      },
      allowNull: false,
    },
    CustomerID: {
      type: Sequelize.INTEGER,
      references: {
        model: "Customer",
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    // options
  }
);

module.exports = Booking;
