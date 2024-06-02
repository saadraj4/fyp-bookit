const Bus = require("../models/Bus")
const { Op } = require("sequelize");

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
        const currentDate = new Date(); // Get the current date and time

        const dateStr = currentDate.getFullYear() + '-' +
            String(currentDate.getMonth() + 1).padStart(2, '0') + '-' +
            String(currentDate.getDate()).padStart(2, '0');

        // Format the time to HH:MM:SS using local time
        const timeStr = String(currentDate.getHours()).padStart(2, '0') + ':' +
            String(currentDate.getMinutes()).padStart(2, '0') + ':' +
            String(currentDate.getSeconds()).padStart(2, '0');



        // Fetch all buses from the database that match the conditions
        const buses = await Bus.findAll({
            where: {
                date: {
                    [Op.gte]: dateStr // Dates that are greater than today
                },
            }
        });

        // Respond with the fetched buses array
        res.status(200).send(buses);
    } catch (error) {
        // Handle potential errors
        res.status(500).send({ message: "Failed to retrieve buses due to an error.", error: error.message });
    }
};



const searchBuses = async (req, res) => {
    try {
        // Extract search parameters from query string
        const { date, origin, destination } = req.query;

        // Validate the presence of all required parameters
        if (!date || !origin || !destination) {
            return res.status(400).send({ message: "Please provide date, origin, and destination to search for buses." });
        }

        // Find buses that match the search criteria
        const buses = await Bus.findAll({
            where: {
                date,
                origin,
                destination
            }
        });

        // Respond with the list of matching buses
        res.status(200).send(buses);
    } catch (error) {
        // Handle potential errors
        res.status(500).send({ message: "Failed to search for buses due to an error.", error: error.message });
    }
};

const removeBus = async (req, res) => {
    console.log(req.body)
    try {
        await Bus.destroy({
            where: {
                origin: req.query.origin,
                destination: req.query.destination,
                date: req.query.date,
                time: req.query.time,

            }
        });

        // Respond with a success message
        res.status(200).send({ message: "Bus deleted successfully!" });
    } catch (error) {
        console.log(error);
        // Handle potential errors
        res.status(500).send({ message: "Failed to delete bus due to an error.", error: error.message });
    }
};

const getBusById = async (req, res) => {
    try {
        // Extract bus ID from request parameters
        const { busId } = req.params;

        // Find the bus in the database by ID
        const bus = await Bus.findByPk(busId);

        // Check if the bus exists
        if (!bus) {
            return res.status(404).send({ message: "Bus not found." });
        }

        // Respond with the bus details
        res.status(200).send(bus);
    } catch (error) {
        // Handle potential errors
        console.error('Error fetching bus details:', error);
        res.status(500).send({ message: "Failed to retrieve bus details due to an error.", error: error.message });
    }
};


module.exports = {
    addBus,
    getAllBuses,
    searchBuses,
    removeBus,
    getBusById,

}