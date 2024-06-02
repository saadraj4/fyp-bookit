// create the model for contact us page containing name,email,message
const sequelize = require("../config/database.js");
const { Sequelize } = require("sequelize");

const ContactUs = sequelize.define("ContactUs", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = ContactUs;