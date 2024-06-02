const express = require("express")
const router = express.Router()
const busController = require("../controllers/busController")

router.post("/", busController.addBus)
router.get("/allbus", busController.getAllBuses)
router.get("/search", busController.searchBuses)

router.delete('/buses', busController.removeBus);
router.get("/:busId", busController.getBusById);



module.exports = router