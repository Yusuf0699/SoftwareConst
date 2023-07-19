import React from "react";
import { NavLink , Link } from "react-router-dom";
import { useStaffLogout } from "../../hooks/useStaffLogout";
import { useAuthContext } from "../../hooks/useAuthContext";


const StaffNavbar = () => {

	const { stafflogout } = useStaffLogout()

	const { staff } = useAuthContext()
  
	const handleClick = () => {
	  stafflogout()
	  window.location.href = "/";

	}
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<NavLink className="navbar-brand" hrefLang="#" to="/staffhome">
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
          {staff && (
            <div>
        	 <span class="text-light my-5 ">Logged In As &nbsp; &nbsp;  {staff.email}</span> 
              <button class="btn btn-light" onClick={handleClick}>Log out</button>
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

export default StaffNavbar;
