const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.get('/', orderController.getAllOrder);

module.exports = router;