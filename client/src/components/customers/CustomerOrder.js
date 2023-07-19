import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';
const CustomerOrder = () => {
  const [customerId, setCustomerId] = useState('');
  const [itemIds, setItemIds] = useState('');
  const [orders, setOrders] = useState([]);
  const { customer } = useAuthContext();
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders/vieworder');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to retrieve orders:', error);
      }
    };
    fetchOrders();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/orders/createorder', {
        customerId,
        itemIds,
      });
      console.log('Order created:', response.data);
      // Reset form fields
      setCustomerId('');
      setItemIds('');
      // Fetch updated orders after creating a new order
    //   setOrders();
    } catch (error) {
      console.error('Failed to create order:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="customerId">Customer ID:</label>
      <input
        type="text"
        id="customerId"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
      />
      {customer && (
        <span>
          {customer.name}
        </span>
      )}
      <label htmlFor="itemIds">Item IDs (comma-separated):</label>
      <input
        type="text"
        id="itemIds"
        value={itemIds}
        onChange={(e) => setItemIds(e.target.value)}
      />
      <button type="submit">Create Order</button>
 <ul>
      {orders.map((order) => (
        <li key={order._id}>
          <p>Customer Email: {order.customer.email}</p>
          <p>Customer Reward Points: {order.customer.rewardPoints}</p>
          <p>Order Date: {order.orderDate}</p>
          <p>Items:</p>
          <ul>
            {order.items.map((item) => (
              <li key={item._id}>
                {item.item ? (
                  <div>
                    {/* <td><img  style={{  objectFit :"fill" , height: 120, width: 180}}src={`data:${item.image.contentType};base64,${item.image.data}`}/></td> */}
                    <p>Item Name: {item.item.name}</p>
                    <p>Item Price: {item.item.price}</p>
                  </div>
                ) : (
                  <p>Item: null</p>
                )}
                <p>Requested Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
    </form>
  );
};
export default CustomerOrder;