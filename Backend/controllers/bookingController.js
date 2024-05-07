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
const getBookingsByBus = async (req, res) => {
  const { origin, destination, date, time } = req.query;

  try {
    // Find the bus that matches the provided origin, destination, date, and time
    const bus = await Bus.findOne({
      where: { origin, destination, date, time },
    });

    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    // Fetch all bookings for the found bus
    const bookings = await Booking.findAll({
      where: { BusID: bus.id },
      attributes: ["seatNumber", "CustomerID", "id"],
    });

    if (bookings.length === 0) {
      return res
        .status(404)
        .json({ message: "No bookings found for this bus" });
    }

    // Fetch customer details for each booking
    const customerDetails = await Promise.all(
      bookings.map((booking) => Customer.findByPk(booking.CustomerID))
    );

    // Prepare the seats array with customer details
    const seats = bookings.map((booking, index) => ({
      bookingId: booking.id,
      seatNumber: booking.seatNumber,
      customerDetail: {
        name: customerDetails[index].name,
        CNIC: customerDetails[index].CNIC,
      },
    }));

    // Construct the response data
    const responseData = {
      Bus: {
        origin: bus.origin,
        destination: bus.destination,
        date: bus.date,
        time: bus.time,
        type: bus.type,
      },
      Seats: seats,
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to retrieve bookings",
      error: error.message,
    });
  }
};

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

const deleteBooking = async (req, res) => {
  const bookingId = req.params.bookingId;

  try {
    // Attempt to delete the booking by ID
    const result = await Booking.destroy({
      where: { id: bookingId },
    });

    // Check if any record was actually deleted
    if (result > 0) {
      res.status(200).json({ message: "Booking successfully deleted" });
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (error) {
    console.log(error);
    // Handle errors and send an error response
    res.status(500).json({
      message: "Failed to delete booking",
      error: error.message,
    });
  }
};

module.exports = {
  addBooking,
  getAllBookings,
  getBookingsByBus,
  getBookingsByBusId,
  deleteBooking,
};
