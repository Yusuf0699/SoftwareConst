import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function StaffAdd(props) {
	const initialState = {
		name:"",
		email:"",
		password:"",
		staffRole:"",
	};
	const [staff, setStaff] = useState(initialState);

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		//if (!staff.companyName || !staff.email) return;
		async function postStaff() {
			try {
				const response = await post("/api/staffs", staff);
				navigate(`/staffs/${response.data._id}`);
			} catch (error) {
				console.log("error", error);
			}
		}
		postStaff();
	}

	function handleChange(event) {
		setStaff({ ...staff, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/staffs");
	}

	return (
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Create staff</h1>
			<hr />
			<form onSubmit={handleSubmit}>
								<div className="form-group">
					<label> Name</label>
					<input
						name="name"
						type="name"
						required
						value={staff.name}
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

						value={staff.email}
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
						value={staff.password}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label>Role</label>
					<input
						name="staffRole"
						type="text"
						required
						value={staff.staffRole}
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

export default StaffAdd;
