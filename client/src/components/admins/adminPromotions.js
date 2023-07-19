


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// function AdminPromotions() {
//   const [items, setItems] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [discount, setDiscount] = useState(0);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     // Fetch items
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get("/api/items");
//         setItems(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchItems();
//   }, []);

//   const handleItemSelect = (itemId) => {
//     const itemExists = selectedItems.some((item) => item._id === itemId);

//     if (itemExists) {
//       const updatedItems = selectedItems.filter((item) => item._id !== itemId);
//       setSelectedItems(updatedItems);
//     } else {
//       const selectedItem = items.find((item) => item._id === itemId);
//       setSelectedItems([...selectedItems, selectedItem]);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("/api/promotions/promos", {
//         items: selectedItems.map((item) => item._id),
//         discount,
//         startDate,
//         endDate,
//       });
//       console.log(response.data);
//       // Handle success case
//     } catch (error) {
//       console.error(error);
//       // Handle error case
//     }
//   };

//   let navigate = useNavigate();

//   return (
//     <div>
//       <h2>Create Item Promotion</h2>

//       <form onSubmit={handleSubmit}>
//         <p>
//           <button
//             className="btn btn-secondary float-right"
//             onClick={() => navigate(-1)}
//           >
//             Back
//           </button>
//         </p>

//         <div className="table-responsive">
//           <table className="table riped  table-hover table-bordered container">
//             <thead>
//               <tr>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Description</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Select</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items &&
//                 items.map((item) => (
//                   <tr key={item._id}>
//                     <td>
//                       <img
//                         style={{ objectFit: "fill", height: 120, width: 180 }}
//                         src={`data:${item.image.contentType};base64,${item.image.data}`}
//                         alt={item.name}
//                       />
//                     </td>
//                     <td>{item.name}</td>
//                     <td>{item.description}</td>
//                     <td>{item.price}</td>
//                     <td>{item.quantity}</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         checked={selectedItems.some((i) => i._id === item._id)}
//                         onChange={() => handleItemSelect(item._id)}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>

//         <div>
//           {/* Hidden input field for item IDs */}
//           <input
//             type="hidden"
//             name="itemIds"
//             value={selectedItems.map((item) => item._id).join(",")}
//           />
//         </div>

//         <br />
//         <div style={{ textAlign: "center" }}>
//           <label>
//             Needed Points:
//             <input
//               type="number"
//               value={discount}
//               onChange={(e) => setDiscount(Number(e.target.value))}
//             />
//           </label>
//         </div>
//         <br />
//         <div style={{ textAlign: "center" }}>
//           <label>
//             Start Date:
//             <input
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />
//           </label>
//         </div>
//         <br />
//         <div style={{ textAlign: "center" }}>
//           <label>
//             End Date:
//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//           </label>
//         </div>
//         <br />

//         <div style={{ textAlign: "center" }}>
//           <button className="btn btn-primary" type="submit">
//             Create Promotion
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AdminPromotions;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AdminPromotions() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    // Fetch items
    const fetchItems = async () => {
      try {
        const response = await axios.get("/api/items");
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  const handleItemSelect = (itemId) => {
    const itemExists = selectedItems.some((item) => item._id === itemId);

    if (itemExists) {
      const updatedItems = selectedItems.filter((item) => item._id !== itemId);
      setSelectedItems(updatedItems);
    } else {
      const selectedItem = items.find((item) => item._id === itemId);
      setSelectedItems([...selectedItems, selectedItem]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const itemIds = selectedItems.map((item) => item._id);
      const response = await axios.post("/api/promotions/promos", {
        items: itemIds,
        discount,
        startDate,
        endDate,
      });
      console.log(response.data);
      // Handle success case
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };

  let navigate = useNavigate();

  return (
    <div>
      <h2>Create Item Promotion</h2>

      <form onSubmit={handleSubmit}>
        <p>
          <button
            className="btn btn-secondary float-right"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </p>

        <div className="table-responsive">
          <table className="table riped  table-hover table-bordered container">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <img
                        style={{ objectFit: "fill", height: 120, width: 180 }}
                        src={`data:${item.image.contentType};base64,${item.image.data}`}
                        alt={item.name}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedItems.some((i) => i._id === item._id)}
                        onChange={() => handleItemSelect(item._id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div>
          {/* Hidden input field for item IDs */}
          <input
            type="hidden"
            name="itemIds"
            value={selectedItems.map((item) => item._id).join(",")}
          />
        </div>

        <br />
        <div style={{ textAlign: "center" }}>
          <label>
            Discount:
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
            />
          </label>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <label>
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>
        <br />

        <div style={{ textAlign: "center" }}>
          <button className="btn btn-primary" type="submit">
            Create Promotion
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminPromotions;