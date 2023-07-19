import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function CustomerDelete(props) {
	const [customer, setCustomer] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function deleteCustomerById() {
				try {
					const response = await axios.get(`/api/customers/${_id}`);
					setCustomer(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			deleteCustomerById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`/api/customers/${_id}`);
			navigate("/customers");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="container">
			<h2>{customer.email}</h2>

			<p>
				<b>Reward Points</b>: {customer.rewardPoints}
			</p>
			<p>
				<small>
					<b>ID</b>: {customer._id}
				</small>
			</p>
			<div className="btn-group">
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/customers" className="btn btn-secondary">
					Cancel{" "}
				</Link>
			</div>
			<hr />
		</div>
	);
}

export default CustomerDelete;
