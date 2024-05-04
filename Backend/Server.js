const express = require("express")
const cors = require('cors');
const bodyParser = require('body-parser');
const CustomerRoutes = require('./routes/CustomerRoutes.js');
const sequelize = require('./sequelize');
const app = express();
const PORT = 80;


// Check the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database');
  });


app.use(cors());
app.use(bodyParser.json());


app.use('/api', CustomerRoutes)




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
