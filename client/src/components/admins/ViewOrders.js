
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';

const ViewOrder = () => {
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

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`/api/orders/delete/${orderId}`);
      // Refresh the orders list after deletion
      const response = await axios.get('/api/orders/vieworder');
      setOrders(response.data);
    } catch (error) {
      console.error('Failed to delete order:', error);
    }
  };

  let navigate = useNavigate();

  return (
    <div className="table-responsive">
      <>
        <button className="btn btn-secondary float-right" onClick={() => navigate(-1)}>
          Back
        </button>
      </>

      <table className="table riped  table-hover table-bordered container">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Reward Points</th>
            <th>Order Date</th>
            <th>Items</th>
           
            <th>Cancel Order</th> {/* Added column for delete button */}

            <th> Order Type </th> {/* Added column for delete button */}

          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.customer.name}</td>
              <td>{order.customer.rewardPoints}</td>
              <td>{order.orderDate}</td>
              <td>
                <table className="table riped  table-hover table-bordered container">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Item Price</th>
                      <th>Requested Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item) => (
                      <tr key={item._id}>
                        <td>{item.item ? item.item.name : 'null'}</td>
                        <td>{item.item ? item.item.price : 'null'}</td>
                        <td>{item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteOrder(order._id)}
                >
                  Delete
                </button>
              </td>
              <td>{order.isTakeAway ? 'Take Away' : 'Dine In'}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewOrder;