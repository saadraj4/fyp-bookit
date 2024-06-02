const ContactUs = require("../models/ContactUs");

const addContactUs = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    // Create a new contact us entry
    const contact = await ContactUs.create({
        name,
        email,
        message,
    });


    // Send a successful response with contact us details
    res.status(201).send(contact);
  } catch{
    // Handle errors and send an error response
    res.status(500).json({
      message: "Failed to add contact us",
    });
  }
};

const getAllRequests = async (req,res) => {
  try {
    const requests = await ContactUs.findAll(); // Assuming ContactUs is your Sequelize model
    res.json(requests);
} catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).json({ message: 'Failed to fetch requests' });
}
}

module.exports = { 
    addContactUs,
    getAllRequests
};