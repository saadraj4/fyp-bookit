// controllers/customerController.js

const Customer = require('../models/Customer'); // Import the Customer model

exports.addCustomer = async (req, res) => {
  try {
    // Extract data from the request body
    const { name, email, phoneNumber,CNIC } = req.body;

    // Create a new customer record in the database
    const customer = await Customer.create({
      name,
      email,
      phoneNumber,
      CNIC
    });

    // Send a success response
    res.status(201).json({
      success: true,
      message: 'Customer added successfully',
      data: customer,
    });
  } catch (error) {
    // Handle errors
    console.error('Error adding customer:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while adding the customer',
      error: error.message,
    });
  }
};
