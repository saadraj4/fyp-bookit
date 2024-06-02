const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactUs");

router.post("/addcontactus", contactController.addContactUs);
router.get("/getAllRequests",contactController.getAllRequests)

module.exports = router 