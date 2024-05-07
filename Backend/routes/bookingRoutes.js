const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.post("/", bookingController.addBooking);
router.get("/", bookingController.getAllBookings);
router.get("/buses", bookingController.getBookingsByBus);
router.get("/bus/:busId", bookingController.getBookingsByBusId);

module.exports = router;
