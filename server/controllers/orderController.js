const Order = require('../models/orderModel');
const createOrder = async (req, res) => {
  try {
    const { customerId, itemIds, quantityno } = req.body;
    // Create a new order
    const items = itemIds.map((itemId, index) => ({
      item: itemId,
      quantity: quantityno[index],
    }));

    const order = new Order({
      customer: customerId,
      items: items,
    });
    // Save the order to the database
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};




// Controller method to get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('customer').populate('items.item');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve orders' });
  }
};

const cancelOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    // Find and delete the order by ID
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json({ message: 'Order cancelled and deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to cancel order' });
  }
};
module.exports = {
  createOrder,
  getAllOrders,
  cancelOrder,
};