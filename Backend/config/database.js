// db.js or something similar under a config or database directory

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("bookit", "root", "root", {
  host: "localhost",
  dialect: "mysql", // or whatever dialect you are using
});

module.exports = sequelize;
