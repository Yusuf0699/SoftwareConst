import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function DailyNeededItems(props){
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
			<h1>  Daily Needed Items</h1>
			<p>
          <button className="btn btn-secondary float-right" onClick={() => navigate(-1)}>Back</button> 
        </p>


			<div className="table-responsive">
			<table className="table riped  table-hover table-bordered container">
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Quantity</th>
						<th>Needed Items</th>
					</tr>
				</thead>
				<tbody>
					{items &&
						items.map((item) => {
							return (
								<tr key={item._id}>
									 <td><img  style={{  objectFit :"fill" , height: 120, width: 180}}src={`data:${item.image.contentType};base64,${item.image.data}`}/></td>
									<td>{item.name}</td>
									<td>{item.quantity}</td>
									<td>
									{item.quantity < 3 ? <b>This Item Is needed</b> : 'There is plenty of this item'}
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

export default DailyNeededItems;