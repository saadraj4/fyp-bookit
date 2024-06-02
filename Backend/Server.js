const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./sequelize");
const app = express();
const PORT = 80;

const busRouter = require("./routes/busRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const contactUsRouter = require('./routes/contactUs');


// Check the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database",err);
  });

app.use(cors());
app.use(bodyParser.json());
app.use("/bus", busRouter);
app.use("/booking", bookingRouter);
app.use('/contact', contactUsRouter); // Use the contact us routes


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
