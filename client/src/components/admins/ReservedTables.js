import React, { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';
const ReservedTables = () => {
  const [customerId, setCustomerId] = useState('');
  const [tables, setTables] = useState([]);
  const [itemIds, setItemIds] = useState('');
  const [reservations, setReservation] = useState([]);
  const { customer } = useAuthContext();
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response =  await axios.get("/api/reserves/reserved");
        setReservation(response.data);
      } catch (error) {
        console.error('Failed to retrieve orders:', error);
      }
    };
    fetchReservations();
  }, []);

  let navigate = useNavigate();


//   await axios.get("/api/reserves/reserved");
  return (
    <div className="table-responsive">
                          <p><button className="btn btn-secondary float-right" onClick={() => navigate(-1)}>Back</button> </p>
<table className="table riped  table-hover table-bordered container">
				<thead>
					<tr>
						<th>Customer Name</th>
						<th>Reserved Table</th>
						<th>Reservation Date</th>
					</tr>
				</thead>


				<tbody>
					{reservations &&
						reservations.map((reservation) => {
							return (
								<tr key={reservation._id}>
									<td>{reservation.customer.name}</td>
                  <td>{reservation.table.TableId}</td>
									<td>{reservation.reservationDate}</td>

								</tr>
							);
						})}
				</tbody>
			</table>

 {/* <ul>

      {reservations.map((reservation) => (
        <li key={reservation._id}>
          <p>Customer Name: {reservation.customer.name}</p>
          <p>Reservation Date: {reservation.reservationDate}</p>
          <p>Reserved Table: {reservation.table.TableId}</p>
        </li>
      ))}
    </ul> */}

    </div>
  );
};

export default ReservedTables;

