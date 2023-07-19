import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function ItemList() {
	const [items, setItems] = useState([]);

	useEffect(function () {
		async function getAllItems() {
			try {
				const response = await axios.get("/api/items");
				setItems(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getAllItems();
	}, []);

	return (
		<div>
			<h2>
				Items
				<p>
					<Link to="/items/new" className="btn btn-primary float-right">
						Create item
					</Link>
				</p>
			</h2>
			<hr />
			{items.map((item) => {
				return (
					<div key={item._id}>
						<h4>
							<Link to={`/items/${item._id}`}>{item.name}</Link>
						</h4>
						<div className="btn-group">
							<Link to={`/items/${item._id}/edit`} className="btn btn-primary">
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

export default ItemList;
