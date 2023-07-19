import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StaffCardViewVertical() {
	const [staffs, setStaffs] = useState([]);

	useEffect(function () {
		async function getStaffs() {
			try {
				const response = await axios.get("/api/staffs");
				setStaffs(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getStaffs();
	}, []);

	return (
		<div className="container">
			<h2>
				Staff - Col Card View
				<p>
					<Link to="/staffs/new" className="btn btn-primary float-right">
						Create staff
					</Link>
				</p>
			</h2>
			<hr />
			<div>
				<div className="d-flex flex-wrap">
					{staffs.map((staff) => {
						return (
							<div
								className="card"
								style={{ width: 250, margin: 30 }}
								key={staff._id}
							>
								<div class="card-header">
									<h5 className="card-title">
										<Link to={`/staffs/${staff._id}`} className="link-line">
											{staff.email}
										</Link>
									</h5>
								</div>
								<div className="card-body">
									<p className="card-text limit-char">{staff.email}</p>
									<p className="card-text d-flex align-items-center">
										<i className="bi bi-geo-alt-fill text-warning"></i>
										<small className="text-muted one-liner">
											{staff.staffRole}
										</small>
									</p>
								</div>
								<div class="card-footer d-flex align-items-center">
									<Link
										to={`/staffs/${staffs._id}/edit`}
										className="btn btn-primary"
									>
										Edit
									</Link>
									<span>
										<small>
											<Link to={`/staffs/${staff._id}`} className="link-line">
												Read More...
											</Link>
										</small>
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default StaffCardViewVertical;
