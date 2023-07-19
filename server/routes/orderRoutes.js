const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to create a new order
router.post('/createorder', orderController.createOrder);
// Route to get all orders
router.get('/vieworder', orderController.getAllOrders);
router.delete("/delete/:id", orderController.cancelOrder);

module.exports = router;