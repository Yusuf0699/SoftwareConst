// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuthContext } from '../../hooks/useAuthContext';
// const ViewOrder = () => {
//   const [customerId, setCustomerId] = useState('');
//   const [itemIds, setItemIds] = useState('');
//   const [orders, setOrders] = useState([]);
//   const { customer } = useAuthContext();
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('/api/orders/vieworder');
//         setOrders(response.data);
//       } catch (error) {
//         console.error('Failed to retrieve orders:', error);
//       }
//     };
//     fetchOrders();
//   }, []);


//   return (

//       //change to table view
//  <ul>
//       {orders.map((order) => (
//         <li key={order._id}>
//           <p>Customer Email: {order.customer.email}</p>
//           <p>Customer Reward Points: {order.customer.rewardPoints}</p>
//           <p>Order Date: {order.orderDate}</p>

//           <p>Items:</p>
//           <ul>
//             {order.items.map((item) => (
//               <li key={item._id}>
//                 {item.item ? (
//                   <div>
//                     <p>Item Name: {item.item.name}</p>
//                     <p>Item Price: {item.item.price}</p>
//                   </div>
//                 ) : (
//                   <p>Item: null</p>
//                 )}
//                 <p>Requested Quantity: {item.quantity}</p>
//               </li>
//             ))}
//           </ul>
//         </li>
//       ))}
//     </ul>

    
//   );
// };

// export default ViewOrder;

// import React, { useState, useEffect } from 'react';
// import { useNavigate} from "react-router-dom";
// import axios from 'axios';
// import { useAuthContext } from '../../hooks/useAuthContext';

// const ViewOrder = () => {
//   const [orders, setOrders] = useState([]);
//   const { customer } = useAuthContext();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('/api/orders/vieworder');
//         setOrders(response.data);
//       } catch (error) {
//         console.error('Failed to retrieve orders:', error);
//       }
//     };
//     fetchOrders();
//   }, []);

//     let navigate = useNavigate();



  


//   return (
//     <div className="table-responsive">
//               <>
//           <button className="btn btn-secondary float-right" onClick={() => navigate(-1)}>Back</button> 
//         </>

//     <table className="table riped  table-hover table-bordered container"  >
//       <thead>
//         <tr>
//           <th>Customer Email</th>
//           <th>Customer Reward Points</th>
//           <th>Order Date</th>
//           <th>Items</th>
//         </tr>
//       </thead>
//       <tbody>
//         {orders.map((order) => (
//           <tr key={order._id}>
//             <td>{order.customer.email}</td>
//             <td>{order.customer.rewardPoints}</td>
//             <td>{order.orderDate}</td>
//             <td>

//               <table className="table riped  table-hover table-bordered container" >
//                 <thead>
//                   <tr>
//                     <th>Item Name</th>
//                     <th>Item Price</th>
//                     <th>Requested Quantity</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {order.items.map((item) => (
//                     <tr key={item._id}>
//                       <td>{item.item ? item.item.name : 'null'}</td>
//                       <td>{item.item ? item.item.price : 'null'}</td>
//                       <td>{item.quantity}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>
//   );
// };

// export default ViewOrder;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';

const CustomerViewOrders = () => {
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



//   const   handleReceivedOrder = async (orderId) => {
//     try {
//       // Get the order details
//       const order = orders.find((order) => order._id === orderId);
  
//       // Calculate the total quantity of items in the order
//       const totalQuantity = item.quantity + 3;
  
//       // Increase the reward tpoints by the total quantity
//       await axios.patch(`/api/customers/${order.customer._id}`, {
//         rewardPoints: totalQuantity
//       });
  
//       // Delete the order
//       await axios.delete(`/api/orders/delete/${orderId}`);
  
//       // Refresh the orders list after deletion
//       const response = await axios.get('/api/orders/vieworder');
//       setOrders(response.data);
//     } catch (error) {
//       console.error('Failed to delete order:', error);
//     }
//   };
const handleReceivedOrder = async (orderId) => {
    try {
      // Get the order details
      const order = orders.find((order) => order._id === orderId);
  
      // Calculate the total reward points to increase
      const totalRewardPoints = order.items.reduce((total, item) => total + item.quantity, 0);
  
      // Get the current reward points of the customer
      const response = await axios.get(`/api/customers/${order.customer._id}`);
      const currentRewardPoints = response.data.rewardPoints;
  
      // Calculate the new reward points by adding the totalRewardPoints to the current reward points
      const newRewardPoints = currentRewardPoints + totalRewardPoints;
  
      // Increase the reward points by the item.quantity for each item
      await axios.patch(`/api/customers/${order.customer._id}`, {
        rewardPoints: newRewardPoints
      });
  
      // Display an alert to the user
      alert(`Reward points have been incremented by ${totalRewardPoints}`);
  
      // Delete the order
      await axios.delete(`/api/orders/delete/${orderId}`);
  
      // Refresh the orders list after deletion
      const ordersResponse = await axios.get('/api/orders/vieworder');
      setOrders(ordersResponse.data);
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

      <>
        <button className="btn btn-primary float-right" onClick={() => navigate('/customerhome')}>
          Home
        </button>
      </>

      <table className="table riped  table-hover table-bordered container">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Reward Points</th>
            <th>Order Date</th>
            <th>Items</th>
            <th>Receive Order</th> {/* Added column for delete button */}
            <th>Cancel Order</th> {/* Added column for delete button */}
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
                      <th>Total Price </th>

                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item) => (
                      <tr key={item._id}>
                        <td>{item.item ? item.item.name : 'null'}</td>
                        <td>{item.item ? item.item.price : 'null'}</td>
                        <td>{item.quantity}</td>
                        <td>{item.quantity * item.item.price}</td>

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
                  Cancel
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleReceivedOrder(order._id)}
                >
                 Order Recieved
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerViewOrders;

