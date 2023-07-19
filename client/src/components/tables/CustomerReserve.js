
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useAuthContext } from "../../hooks/useAuthContext";

// function CustomerReserve() {
//   const [tables, setTables] = useState([]);
//   const [customerId, setCustomerId] = useState('');

//     const {customer} = useAuthContext();
//   useEffect(function () {
//     async function getTables() {
//       try {
//         const response = await axios.get("/api/tables");
//         setTables(response.data);
//       } catch (error) {
//         console.log("error", error);
//       }
//     }
//     getTables();
//   }, []);

//   const reserveTable = async (tableId) => {
//     try {

//         const reservationdata = {
//             customerId: customer.idc,
//             tableId,}
            
//       const response = await axios.post("/api/reserves/reserve",  reservationdata );
//       const updatedTable = response.data;
//       setTables((prevTables) =>
//         prevTables.map((table) =>
//           table._id === tableId ? updatedTable : table
//         )

//       );

//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div>
//         <h2>Table Reservation - Apply the Make Reservation Function</h2>
//         <hr />
//       </div>

//       <div className="table-responsive">
//         <table className="table table-striped table-hover table-bordered container">
//           <thead>
//             <tr>
//               <th>Table Number</th>
//               <th>Table Capacity</th>
//               <th>Table Reservation</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tables &&
//               tables.map((table) => {
//                 return (
//                   <tr key={table._id}>
//                     <td>
//                       <Link to={`/tables/${table._id}`} className="link-line">
//                         {table.TableId}
//                       </Link>
//                     </td>
//                     <td>{table.TableCapacity}</td>
//                     <td>
//                       {table.isReserved === false ? (
//                         <button
//                           className="btn btn-warning"
                          
//                           onClick={() => reserveTable(table._id , customer.idc)}
//                         >
//                           Reserve Table
//                         </button>
//                       ) : (
//                         <p>This table is not available</p>
//                       )}
//                     </td>




//                   </tr>
//                 );
//               })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CustomerReserve;






//1
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

function CustomerReserve() {
  const [tables, setTables] = useState([]);
  const [customerId, setCustomerId] = useState('');
    const {customer} = useAuthContext();
  useEffect(function () {
    async function getTables() {
      try {
        const response = await axios.get("/api/tables");
        setTables(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getTables();
  }, []);


  const reserveTable = async (tableId) => {
    try {
        
        const reservationdata = {
            customerId: customer.idc,
            tableId,}

      await axios.post("/api/reserves/reserve",  reservationdata );
      setTables((prevTables) =>
        prevTables.map((table) =>
          table._id === tableId ? { ...table, isReserved: true } : table
        )
      );
    } catch (error) {
      console.log("error", error);


    }
        try {
          await axios.patch(`/api/tables/${tableId}`, { isReserved: true });
        } catch (error) {
          console.log("error", error);
        }
      

  };


  return (
    <div className="container">
      <div>
        <h2>Table Reservation</h2>
        <hr />
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered container">
          <thead>
            <tr>
              <th>TableId</th>
              <th>Table Capacity</th>
              <th>Table Reservation</th>
            </tr>
          </thead>
          <tbody>
            {tables &&
              tables.map((table) => {
                return (
                  <tr key={table._id}>
                    <td>
                        {table.TableId}
                    
                    </td>



                    <td>{table.TableCapacity}</td>



                         <td>
                      {table.isReserved === false ? (
                         <button
                         className="btn btn-warning"
                          
                          onClick={() => reserveTable(table._id,  customer.idc)}
                         >
                           Reserve Table
                         </button>
                       ) : (
                         <p>This table is not available</p>
                       )}
                     </td>









                    
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerReserve;


//   const reserveTable = async (tableId) => {
//     try {
//       await axios.patch(`/api/tables/${tableId}`, { isReserved: true });
//       setTables((prevTables) =>
//         prevTables.map((table) =>
//           table._id === tableId ? { ...table, isReserved: true } : table
//         )
//       );
//     } catch (error) {
//       console.log("error", error);
//     }
//   };



//   const reserveTable = async (tableId) => {
//     try {

//         const reservationdata = {
//             customerId: customer.idc,
//             tableId,}
            
//       const response = await axios.post("/api/reserves/reserve",  reservationdata );
//       const updatedTable = response.data;
//       setTables((prevTables) =>
//         prevTables.map((table) =>
//           table._id === tableId ? updatedTable : table
//         )

//       );

//     } catch (error) {
//       console.log("error", error);
//     }
//   };
