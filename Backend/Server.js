const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./sequelize");
const app = express();
const PORT = 80;

const busRouter = require("./routes/busRoutes");
const bookingRouter = require("./routes/bookingRoutes");

// Check the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database");
  });

app.use(cors());
app.use(bodyParser.json());

app.use("/bus", busRouter);
app.use("/booking", bookingRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
