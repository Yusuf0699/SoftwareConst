// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function StaffTable() {
// 	const [staffs, setStaffs] = useState([]);

// 	useEffect(function () {
// 		async function getStaffs() {
// 			try {
// 				const response = await axios.get("/api/staffs");
// 				setStaffs(response.data);
// 			} catch (error) {
// 				console.log("error", error);
// 			}
// 		}
// 		getStaffs();
// 	}, []);

// 	return (
// 		<div className="container">
// 			<div>
// 				<h2>
// 					Staff - Table View
// 					<p>
// 						<Link to="/staffs/new" className="btn btn-primary float-right">
// 							Create staff
// 						</Link>
// 					</p>
// 				</h2>
// 				<hr />
// 			</div>
		
//                         <div className="table-responsive">
// 			<table className="table riped  table-hover table-bordered container">
// 				<thead>
// 					<tr>
// 						<th>Name</th>
// 						<th>Phone</th>
// 						<th>Email</th>
// 						<th>Location</th>
// 						<th>View</th>
// 						<th>Edit</th>
// 						<th>Delete</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{staffs &&
// 						staffs.map((staff) => {
// 							return (
// 								<tr key={staff._id}>
// 									<td>
// 										<Link to={`/staffs/${staff._id}`} className="link-line">
// 											{staff.companyName}
// 										</Link>
// 									</td>
// 									<td>{staff.phone}</td>
// 									<td>{staff.email}</td>
// 									<td>{staff.location}</td>
// 									<td>
// 										<Link to={`/staffs/${staff._id}`} className="btn btn-warning">
// 											View
// 										</Link>
// 									</td>
// 									<td>
// 										<Link
// 											to={`/staffs/${staff._id}/edit`}
// 											className="btn btn-success"
// 										>
// 											Edit
// 										</Link>
// 									</td>
// 									<td>
// 										<Link
// 											to={`/staffs/${staff._id}/delete`}
// 											className="btn btn-danger"
// 										>
// 											Delete
// 										</Link>
// 									</td>
// 								</tr>
// 							);
// 						})}
// 				</tbody>
// 			</table>
// 			</div>
// 		</div>
// 	);
// }

// export default StaffTable;
