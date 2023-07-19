import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function ItemDetails(props) {
	const [item, setItem] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function getItemById() {
				try {
					const response = await axios.get(`/api/items/${_id}`);
					setItem(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getItemById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`/api/items/${_id}`);
			navigate("/items");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="container">
			{/* <h2>Image: {item.image}</h2> */}
		<p> Food Name: {item.name}</p>
			
			 <p align="justify"> Description: {item.description}</p>
			

			<p>
			Quantity: {item.quantity}
			</p>
			<p>
				Price {item.price}
			</p>


	
			<p>
				<small>
					<b>ID</b>: {item._id}
				</small>
			</p>
			<div className="btn-group ">
				<Link to={`/items/${item._id}/edit`} className="btn btn-primary">
					Edit
				</Link>
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/items" className="btn btn-secondary">
					Close
				</Link>
			</div>
			<hr />
		</div>
	);
}
export default ItemDetails;