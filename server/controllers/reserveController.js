const Reservation = require('../models/reserveModel');

// Reserve a table
const reserveTable = async (req, res) => {
  try {
    const { customerId, tableId } = req.body;
    
    const reservation = new Reservation({
      customer: customerId,
      table: tableId,
    });

    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to reserve the table' });
  }
};

// Get all reserved tables
const getAllReservedTables = async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate('customer', 'name') // Only populate the customer's email field
      .populate('table', 'TableId');

    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get reserved tables' });
  }
};

module.exports = {
    reserveTable,
    getAllReservedTables,
  };