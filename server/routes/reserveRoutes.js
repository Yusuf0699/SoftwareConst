const express = require('express');
const router = express.Router();
const reserveController = require('../controllers/reserveController');
// Reserve a table
router.post('/reserve', reserveController.reserveTable);
// Get all reserved tables
router.get('/reserved', reserveController.getAllReservedTables);

module.exports = router;