import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CustomerEdit(props) {
	const initialState = {
		name:"",
		email: "",
		rewardPoints:"",
	};
	const [customer, setCustomer] = useState(initialState);

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function updateCustomer() {
				try {
					const response = await get(`/api/customers/${_id}`);
					setCustomer(response.data);
				} catch (error) {
					console.log(error);
				}
			}
			updateCustomer();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	function handleSubmit(event) {
		event.preventDefault();
		async function updateCustomer() {
			try {
				await patch(`/api/customers/${customer._id}`, customer);
				navigate(`/customers/${customer._id}`);
			} catch (error) {
				console.log(error);
			}
		}
		updateCustomer();
	}

	function handleChange(event) {
		setCustomer({ ...customer, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate(`/customers/${customer._id}`);
	}

	return (
		<div className="container">
			<h1>Edit</h1>
			<hr />
			<form onSubmit={handleSubmit}>


			<div className="form-group">
					<label>Customer Name</label>
					<input
						name="name"
						type="text"
						value={customer.name}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Customer Email</label>
					<input
						name="email"
						type="email"
						value={customer.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				

                <div className="form-group">
  <label>Reward Points</label>
  <input
    name="rewardPoints"
    type="text"
    value={customer.rewardPoints}
    onChange={handleChange}
    className="form-control"
    pattern="[0-9][0-9]{0,4}"
    title="Please enter a number from 0 to 99999"
    required
  />
</div>
{/* 
				<div className="form-group">
					<label>Reward Points</label>
					<input
						name="rewardPoints"
						type="text"
						value={customer.rewardPoints}
						onChange={handleChange}
						className="form-control"
					/>
				</div> */}
	


				<div className="btn-group">
					<button type="submit" className="btn btn-primary">
						Update
					</button>
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

export default CustomerEdit;
