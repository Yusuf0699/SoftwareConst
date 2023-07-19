import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";

function CustomerTable() {
	const [customers, setCustomers] = useState([]);

	useEffect(function () {
		async function getCustomers() {
			try {
				const response = await axios.get("/api/customers");
				setCustomers(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCustomers();
	}, []);

	let navigate = useNavigate();


	return (
		<div className="container">
			<div>
				<h2>
					Customer - Table View
					<p>
						<Link to="/customers/new" className="btn btn-primary float-right">
							Create customer
						</Link>

					</p>
					<p>
          <button className="btn btn-primary float-right" onClick={() => navigate("/adminhome")}>Home</button> 
        </p>
					<p>
          <button className="btn btn-secondary float-right" onClick={() => navigate(-1)}>Back</button> 
        </p>

				</h2>
				<hr />
			</div>
		
                        <div className="table-responsive">
			<table className="table riped  table-hover table-bordered container">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
                        <th>Reward Points</th>
						<th>View</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{customers &&
						customers.map((customer) => {
							return (
								<tr key={customer._id}>
									<td>
										<Link to={`/customers/${customer._id}`} className="link-line">
											{customer.name}
										</Link>
									</td>
						<td>{customer.email}</td>
                                    <td>{customer.rewardPoints}</td>
									<td>
									{/* {table.isReserved === true ? 'Yes, the table is reserved' : 'The table is not reserved'}</td> */}

										<Link to={`/customers/${customer._id}`} className="btn btn-warning">
											View
										</Link>
									</td>
									<td>
										<Link
											to={`/customers/${customer._id}/edit`}
											className="btn btn-success"
										>
											Edit
										</Link>
									</td>
									<td>
										<Link
											to={`/customers/${customer._id}/delete`}
											className="btn btn-danger"
										>
											Delete
										</Link>
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

export default CustomerTable;
