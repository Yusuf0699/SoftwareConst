import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function CustomerAdd(props) {
	const initialState = {
		name:"",
		email:"",
		password:"",
		rewardPoints:"",
	};
	const [customer, setCustomer] = useState(initialState);

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		//if (!customer.companyName || !customer.email) return;
		async function postCustomer() {
			try {
				const response = await post("/api/customers", customer);
				navigate(`/customers/${response.data._id}`);
			} catch (error) {
				console.log("error", error);
			}
		}
		postCustomer();
	}

	function handleChange(event) {
		setCustomer({ ...customer, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/customers");
	}

	return (
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Create customer</h1>
			<hr />
			<form onSubmit={handleSubmit}>
			<div className="form-group">
					<label> Name</label>
					<input
						name="name"
						type="text"
						required
						value={customer.name}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label> Email</label>
					<input
						name="email"
						type="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
						required

						value={customer.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				
				<div className="form-group">
					<label>Password</label>
					<input
						name="password"
						type="password"
						required
						value={customer.password}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label>Reward Points</label>
					<input
						name="rewardPoints"
						type="text"
						required
						value={customer.rewardPoints}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="btn-group">
					<input type="submit" value="Submit" className="btn btn-primary" />
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default CustomerAdd;
