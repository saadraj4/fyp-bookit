const sequelize = require("../config/database.js");
const Bus = require("../models/Bus");
const Customer = require("../models/Customer");
const Booking = require("../models/Booking");
const addBooking = async (req, res) => {
  const { busId, seatNumbers, customerDetails } = req.body;
  console.log(req.body);
  try {
    // Find or create the customer based on CNIC
    const [customer, created] = await Customer.findOrCreate({
      where: { CNIC: customerDetails.CNIC },
      defaults: {
        ...customerDetails,
      },
    });

    console.log("HERE");
    // Create bookings for each seat number provided
    const bookings = await Promise.all(
      seatNumbers.map((seatNumber) => {
        return Booking.create({
          seatNumber: seatNumber,
          BusID: busId,
          CustomerID: customer.id,
        });
      })
    );

    // Send a successful response with booking details
    res.status(201).json({
      message: "Booking successfully added",
      bookings: bookings,
    });
  } catch (error) {
    console.log(error);
    // Handle errors and send an error response
    res.status(500).json({
      message: "Failed to add booking",
      error: error.message,
    });
  }
};

const getAllBookings = (req, res) => {};

const getBookingsByBus = (req, res) => {};

const getBookingsByBusId = async (req, res) => {
  const busId = req.params.busId;
  console.log(busId);
  try {
    const bookings = await Booking.findAll({
      where: { BusID: busId },
    });

    console.log("Here", bookings);

    // Check if there are bookings found
    if (bookings.length > 0) {
      res.status(200).json({
        message: "Bookings retrieved successfully",
        bookings: bookings.map((booking) => booking.seatNumber),
      });
    } else {
      res.status(404).json({
        message: "No bookings found for this bus",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to retrieve bookings",
      error: error.message,
    });
  }
};

module.exports = {
  addBooking,
  getAllBookings,
  getBookingsByBus,
  getBookingsByBusId,
};
