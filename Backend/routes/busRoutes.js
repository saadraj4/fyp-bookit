const express = require("express")
const router = express.Router()
const busController = require("../controllers/busController")

router.post("/", busController.addBus)
router.get("/", busController.getAllBuses)
router.get("/search", busController.searchBuses)

module.exports = router