import React from "react";
import { NavLink , Link } from "react-router-dom";
import { useAdminLogout } from "../../hooks/useAdminLogout";
import { useAuthContext } from "../../hooks/useAuthContext";


const AdminNavbar = () => {

	const { adminlogout } = useAdminLogout()

	const { admin } = useAuthContext()

	const handleClick = () => {
	  adminlogout()
	  window.location.href = "/";
	}



	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<NavLink className="navbar-brand"  to="/adminhome">
					Woodfire
				</NavLink>
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#mobileMenu"
					aria-controls="mobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="toggler-icon top-bar"></span>
					<span className="toggler-icon middle-bar"></span>
					<span className="toggler-icon bottom-bar"></span>
				</button>
				<div className="collapse navbar-collapse" id="mobileMenu">


					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
						<nav>
          {admin && (
            <div>
        	 <span class="text-light my-5 ">Logged In As &nbsp; &nbsp;  {admin.email}</span> 
              <button class="btn btn-light" onClick={handleClick}>Log out</button>
            </div>
          )}
          {!admin && (
            <div>
              <Link to="/alogin">Login</Link>
              <Link to="/asignup">Signup</Link>
            </div>
          )}
        </nav>
						</li>


					</ul>
				</div>
			</div>
		</nav>
	);
};

export default AdminNavbar;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function StaffList() {
// 	const [staffs, setStaffs] = useState([]);

// 	useEffect(function () {
// 		async function getAllStaffs() {
// 			try {
// 				const response = await axios.get("/api/staffs");
// 				setStaffs(response.data);
// 			} catch (error) {
// 				console.log("error", error);
// 			}
// 		}
// 		getAllStaffs();
// 	}, []);

// 	return (
// 		<div>
// 			<h2>
// 				Staffs
// 				<p>
// 					<Link to="/staffs/new" className="btn btn-primary float-right">
// 						Create staff
// 					</Link>
// 				</p>
// 			</h2>
// 			<hr />
// 			{staffs.map((staff) => {
// 				return (
// 					<div key={staff._id}>
// 						<h4>
// 							<Link to={`/staffs/${staff._id}`}>{staff.email}</Link>
// 						</h4>
// 						<div className="btn-group">
// 							<Link to={`/staffs/${staff._id}/edit`} className="btn btn-primary">
// 								Edit
// 							</Link>
// 						</div>

// 						<hr />
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// }

// export default StaffList;
