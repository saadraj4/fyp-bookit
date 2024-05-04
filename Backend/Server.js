const express = require("express")
const cors = require('cors');
const bodyParser = require('body-parser');
const DemoRoutes = require('./routes/DemoRoutes.js');
const sequelize = require("./sequelize.js");
const app = express();
const PORT = 80;

// call the database connection function
// connectDb();

app.use(cors());
app.use(bodyParser.json());

// Check the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database');
  });

app.use('/api', DemoRoutes)




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
