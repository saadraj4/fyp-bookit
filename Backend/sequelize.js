// sequelize.js

const { Sequelize } = require('sequelize');
const config = require('./config/config.json'); // Import Sequelize configuration from config/config.json

// Extract configuration options for the 'development' environment
const { username, password, database, host, dialect } = config.development;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

module.exports = sequelize;
