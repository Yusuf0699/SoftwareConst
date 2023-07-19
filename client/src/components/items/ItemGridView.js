import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";

function ItemGridView() {
	const [items, setItems] = useState([]);

	useEffect(function () {
		async function getItems() {
			try {
				const response = await axios.get("/api/items");
				setItems(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getItems();
	}, []);
	let navigate = useNavigate();


	return (
		<div className="container">
			<h2>
				Item - Grid View
				<p>
					<Link to="/items/new" className="btn btn-primary float-right">
						Create item
					</Link>
				</p>
				<p>
          <button className="btn btn-secondary float-right" onClick={() => navigate(-1)}>Back</button> 
        </p>
			</h2>
			<hr />
			<div>
				<div className="d-flex flex-wrap">
					{items.map((item) => {
						return (
							<div
								className="card"
								style={{ width: 250, margin: 30 }}
								key={item._id}
							>
								<div class="card-header">
									<h5 className="card-title">
										<Link to={`/items/${item._id}`} className="link-line">
											{item.name}
										</Link>
									</h5>
								</div>
								<div className="card-body">
									<h5 className="d-flex align-items-center">

											{item.price}
									
									</h5>
									{/* <h6 className="card-subtitle mb-2 text-muted">
										{item.phone}
									</h6> */}
									<p className="card-text limit-char">{item.description}</p>
									<p className="card-text d-flex align-items-center"></p>
										
										<small className="text-muted one-liner">
											{item.description}
										</small>
								

								</div>
								<div class="card-footer d-flex align-items-center">
									<Link
										to={`/items/${items._id}/edit`}
										className="btn btn-primary"
									>
										Edit
									</Link>
									<span>
										<small>
											<Link to={`/items/${item._id}`} className="link-line">
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

export default ItemGridView;
