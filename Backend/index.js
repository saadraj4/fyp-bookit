// index.js

const sequelize = require('./sequelize');
// Import associations
require('./associations');

// Sync models with database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });
