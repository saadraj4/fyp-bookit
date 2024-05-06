const Bus = require("../models/Bus")

const addBus = async (req, res) => {
    try {
        // Extract bus details from request body
        const { origin, destination, date, time, type, price } = req.body;

        // Validate incoming data (optional, could be more complex based on requirements)
        if (!origin || !destination || !date || !time || !type || !price) {
            return res.status(400).send({ message: "All fields must be provided and valid." });
        }

        // Create a new bus in the database
        const newBus = await Bus.create({
            origin,
            destination,
            date,
            time,
            type,
            price
        });

        // Respond with the created bus object
        res.status(201).send(newBus);
    } catch (error) {
        // Handle potential errors
        res.status(500).send({ message: "Failed to add bus due to an error.", error: error.message });
    }
};

const getAllBuses = async (req, res) => {
    try {
        // Fetch all buses from the database
        const buses = await Bus.findAll();

        // Respond with the fetched buses array
        res.status(200).send(buses);
    } catch (error) {
        // Handle potential errors
        res.status(500).send({ message: "Failed to retrieve buses due to an error.", error: error.message });
    }
};




module.exports = {
    addBus, 
    getAllBuses
}