import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
function ItemTable() {
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
			<div>
				<h2>
					Item - Table View
					<p>
						<Link to="/items/new" className="btn btn-primary float-right">
							Create item
						</Link>
					</p>

					<p>
          <button
            className="btn btn-secondary float-right"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </p>

					<p>
          <button className="btn btn-secondary float-right" onClick={() => navigate(-1)}>Back</button> 
        </p>
				</h2>
				<hr />
			</div>
		
                        <div className="table-responsive">
			<table className="table riped  table-hover table-bordered container">
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Description</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Edit</th>
						<th>Delete</th>

					</tr>
				</thead>
				<tbody>
					{items &&
						items.map((item) => {
							return (
								<tr key={item._id}>
									 <td><img  style={{  objectFit :"fill" , height: 120, width: 180}}src={`data:${item.image.contentType};base64,${item.image.data}`}/></td>
									<td>{item.name}</td>
									<td>{item.description}</td>
									<td>{item.price}</td>
									<td>{item.quantity}</td>

									<td>
										<Link
											to={`/items/${item._id}/edit`}
											className="btn btn-success"
										>
											Edit
										</Link>
									</td>
									<td>
										<Link
											to={`/items/${item._id}/delete`}
											className="btn btn-danger"
										>
											Delete
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			</div>
		</div>
	);
}

export default ItemTable;
