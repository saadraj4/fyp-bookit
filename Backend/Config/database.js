// Database connectivity MongoDB

// const mongoose = require("mongoose");

// const connectDb = () => {
//   mongoose.connect("mongodb+srv://saad-raja:saad-raja@myatlasclusteredu.uc11aog.mongodb.net/Book-It")
//     .then(() => {
//       console.log("Connected Moogose");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// module.exports = connectDb;


// Database Connectivity MYSQL

const mysql = require('mysql2');

const connectDb = () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'bookit'
    });
    // Establish mysql connection
    connection.connect((err) => {
        if (err) {
            console.log('Connection failed with id: ',connection.threadId);
            return;
        }
        console.log('Connection established with id: ', connection.threadId);
    });
  }

module.exports = connectDb;