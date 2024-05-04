const express = require('express');
const router = express.Router()
const demo = require('../controllers/CustomerController');

router.post('/customers', demo.addCustomer);



module.exports = router