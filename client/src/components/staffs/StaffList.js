import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StaffList() {
	const [staffs, setStaffs] = useState([]);

	useEffect(function () {
		async function getAllStaffs() {
			try {
				const response = await axios.get("/api/staffs");
				setStaffs(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getAllStaffs();
	}, []);

	return (
		<div>
			<h2>
				Staffs
				<p>
					<Link to="/staffs/new" className="btn btn-primary float-right">
						Create staff
					</Link>
				</p>
			</h2>
			<hr />
			{staffs.map((staff) => {
				return (
					<div key={staff._id}>
						<h4>
							<Link to={`/staffs/${staff._id}`}>{staff.email}</Link>
						</h4>
						<div className="btn-group">
							<Link to={`/staffs/${staff._id}/edit`} className="btn btn-primary">
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

export default StaffList;
