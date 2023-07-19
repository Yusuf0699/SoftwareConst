import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function StaffDetails(props) {
	const [staff, setStaff] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function getStaffById() {
				try {
					const response = await axios.get(`/api/staffs/${_id}`);
					setStaff(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getStaffById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`/api/staffs/${_id}`);
			navigate("/staffs");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="container">

<p>
				<b>Name</b>: {staff.name}
			</p>
	
			<p>
				<b>Email</b>: {staff.email}
			</p>
	
			<p>
				<b>Role</b>: {staff.staffRole}
			</p>
			<p>
				<small>
					<b>ID</b>: {staff._id}
				</small>
			</p>
			<div className="btn-group ">
				<Link to={`/staffs/${staff._id}/edit`} className="btn btn-primary">
					Edit
				</Link>
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/staffs" className="btn btn-secondary">
					Close
				</Link>
			</div>
			<hr />
		</div>
	);
}

export default StaffDetails;
