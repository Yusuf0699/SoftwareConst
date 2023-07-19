import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
function ItemCustomer() {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const { customer } = useAuthContext();

  useEffect(() => {
    async function getItems() {
      try {
        const response = await axios.get("/api/items");
        const updatedItems = response.data.map((item) => ({
          ...item,
          quantity: 0, // Set the quantity to 0 initially
        }));
        setItems(updatedItems);
      } catch (error) {
        console.log("error", error);
      }
    }
    getItems();
  }, []);



  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders/vieworder');
      setOrders(response.data);
    } catch (error) {
      console.error('Failed to retrieve orders:', error);
    }
  };

  const limit = selectedItems.map((selectedItem) => selectedItem.quantity);

  const incrementQuantity = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item._id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };
  
  const decrementQuantity = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item._id === itemId && item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };


const handleSelectItem = (itemId, quantity, name) => {
  const isSelected = selectedItems.find(
    (selectedItem) => selectedItem.itemId === itemId
  );

  if (isSelected) {
    const updatedSelectedItems = selectedItems.filter(
      (selectedItem) => selectedItem.itemId !== itemId
    );
    setSelectedItems(updatedSelectedItems);
  } else {
    setSelectedItems([...selectedItems, { itemId, quantity, name }]);
  }
};
const makeOrder = async () => {
  try {
    const itemIds = selectedItems.map((selectedItem) => selectedItem.itemId);
    const quantityno = selectedItems.map((selectedItem) => selectedItem.quantity);

    const orderData = {
      customerId: customer.idc,
      itemIds,
      quantityno,
      isTakeAway: isTakeAway, // Pass the isTakeAway value
    };

    const response = await axios.post("/api/orders/createorder", orderData);
    alert("Order created");
    window.location.href = '/cview';
  } catch (error) {
    console.log("Failed to create order:", error);
  }
};

  const [isTakeAway, setIsTakeAway] = useState(false);

  const handleTakeAwayChange = () => {
    setIsTakeAway(true);
  };

  const handleDineInChange = () => {
    setIsTakeAway(false);
  };


  return (
    <div className="container">
      <div>
        <h2>Order Food  </h2>
        <h1>
          {customer && (
            <div>
              <span>{customer.name}</span>
            </div>
          )}
        </h1>
        <hr />
      </div>

      <div className="table-responsive">
        <table className="table riped table-hover table-bordered container">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Make Order</th>

            </tr>
          </thead>




          <tbody>
            {items &&
              items.map((item) => {
                const isSelected = selectedItems.find(
                  (selectedItem) => selectedItem.itemId === item._id
                );

                return (
                  <tr key={item._id}>
                    <td>
                      <img
                        style={{ objectFit: 'fill', height: 120, width: 180 }}
                        src={`data:${item.image.contentType};base64,${item.image.data}`}
                        alt={item.name}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>


                    <td>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => decrementQuantity(item._id)}
                      >
                        -
                      </button>
                      <span>{item.quantity  }</span>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => incrementQuantity(item._id)}
                      >
                        +
                      </button>
                    </td>


                    <td>
                      <button
                        className={`btn btn-primary ${
                          isSelected ? 'selected' : ''
                        }`}
                        onClick={() =>
                          handleSelectItem(item._id, item.quantity ,item.name)
                        }
                      >
                        {isSelected ? 'Selected' : 'Select'}
                      </button>
                    </td>




                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button
          className={`btn ${isTakeAway ? 'btn-secondary' : 'btn-primary'}`}
          onClick={handleDineInChange}
        >
          Dine In
        </button>
        <button
          className={`btn ${isTakeAway ? 'btn-primary' : 'btn-secondary'}`}
          onClick={handleTakeAwayChange}
        >
          Take Away
        </button>
      </div>

      {selectedItems.length > 0 && (
        <div className="selected-items">
          <h3>Selected Items:</h3>
          <ul>
            {selectedItems.map((selectedItem, index) => (
              <li key={index}>
                  name: {selectedItem.name} Quantity: {selectedItem.quantity} 

              </li>
            ))}
          </ul>
          <button className="btn btn-primary" onClick={makeOrder}>
            Make Order
          </button>
        </div>
      )}
    </div>
  );
}

export default ItemCustomer;
