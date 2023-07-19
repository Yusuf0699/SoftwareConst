import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function StaffDelete(props) {
	const [staff, setStaff] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function deleteStaffById() {
				try {
					const response = await axios.get(`/api/staffs/${_id}`);
					setStaff(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			deleteStaffById();
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

<h2>Staff Name  {staff.name}</h2>
			<h2>Staff Email  {staff.email}</h2>

			<p>
				<b>Role</b>: {staff.staffRole}
			</p>
			<p>
				<small>
					<b>ID</b>: {staff._id}
				</small>
			</p>
			<div className="btn-group">
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/staffs" className="btn btn-secondary">
					Cancel{" "}
				</Link>
			</div>
			<hr />
		</div>
	);
}

export default StaffDelete;
