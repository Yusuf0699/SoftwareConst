import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function CustomerDetails(props) {
	const [customer, setCustomer] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function getCustomerById() {
				try {
					const response = await axios.get(`/api/customers/${_id}`);
					setCustomer(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCustomerById();
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

<p>
				<b>Name</b>: {customer.name}
			</p>

			<p>
				<b>Email</b>: {customer.email}
			</p>
	
			<p>
				<b>Reward Points</b>: {customer.rewardPoints}
			</p>
			<p>
				<small>
					<b>ID</b>: {customer._id}
				</small>
			</p>
			<div className="btn-group ">
				<Link to={`/customers/${customer._id}/edit`} className="btn btn-primary">
					Edit
				</Link>
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/customers" className="btn btn-secondary">
					Close
				</Link>
			</div>
			<hr />
		</div>
	);
}

export default CustomerDetails;
