const express = require('express');
const router = express.Router()
const demo = require('../controllers/DemoController');

router.get('/', demo );





module.exports = router