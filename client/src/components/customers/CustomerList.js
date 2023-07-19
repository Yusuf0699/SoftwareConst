import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CustomerList() {
	const [customers, setCustomers] = useState([]);

	useEffect(function () {
		async function getAllCustomers() {
			try {
				const response = await axios.get("/api/customers");
				setCustomers(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getAllCustomers();
	}, []);

	return (
		<div>
			<h2>
				Customers
				<p>
					<Link to="/customers/new" className="btn btn-primary float-right">
						Create customer
					</Link>
				</p>
			</h2>
			<hr />
			{customers.map((customer) => {
				return (
					<div key={customer._id}>
						<h4>
							<Link to={`/customers/${customer._id}`}>{customer.email}</Link>
						</h4>
						<div className="btn-group">
							<Link to={`/customers/${customer._id}/edit`} className="btn btn-primary">
								Edit
							</Link>
						</div>

						<hr />
					</div>
				);
			})}
		</div>
	);
}

export default CustomerList;
