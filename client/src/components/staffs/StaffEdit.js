import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { useNavigate, useParams } from "react-router-dom";

function StaffEdit(props) {
	const initialState = {
		name:"",
		email: "",
		staffRole:"",
	};
	const [staff, setStaff] = useState(initialState);

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function updateStaff() {
				try {
					const response = await get(`/api/staffs/${_id}`);
					setStaff(response.data);
				} catch (error) {
					console.log(error);
				}
			}
			updateStaff();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	function handleSubmit(event) {
		event.preventDefault();
		async function updateStaff() {
			try {
				await patch(`/api/staffs/${staff._id}`, staff);
				navigate(`/staffs/${staff._id}`);
			} catch (error) {
				console.log(error);
			}
		}
		updateStaff();
	}

	function handleChange(event) {
		setStaff({ ...staff, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate(`/staffs/${staff._id}`);
	}

	return (
		<div className="container">
			<h1>Edit</h1>
			<hr />
			<form onSubmit={handleSubmit}>
			<div className="form-group">
					<label>Staff Name</label>
					<input
						name="name"
						type="text"
						value={staff.name}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Staff Email</label>
					<input
						name="email"
						type="email"
						value={staff.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label>Role</label>
					<input
						name="staffRole"
						type="text"
						value={staff.staffRole}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
	


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

export default StaffEdit;
