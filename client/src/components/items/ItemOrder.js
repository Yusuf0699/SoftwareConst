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

	async function MakeOrder(itemId) {
			try {
			  const response = await axios.post(`/api/orders/createorder`);
			  // Handle the successful order creation, e.g., show a success message
			  console.log("Order placed successfully:", response.data);
			} catch (error) {
			  // Handle error while making the order, e.g., show an error message
			  console.log("Error making the order:", error);
			}
		  ;
	}

	return (
		<div className="container"  >
<div style={{textAlign: 'center'}}>
        <h1 style={{marginTop: '120px'}} >Order Item</h1>
			<h2 >{item.image}</h2>
		<p> Food Name: {item.name}</p>
			
			 <p> Description: {item.description}</p>
			


			<p>

            {/* <div className="form-group">
					<label>Order Quantity</label>
					<input
						name="quantity"
						type="number"
						value={item.quantity}
						
						className="form-control"
					/>
				</div> */}
			Quantity: {item.quantity}
			</p>
			<p>
				Price {item.price}
			</p>


	
			<div className="btn-group ">
				<button onClick={MakeOrder} className="btn btn-secondary">
					Make Order
				</button>
				<Link to="/items/itemcustomer" className="btn btn-secondary">
					Close
				</Link>
			</div>
			<hr />
            </div>
		</div>
	);
}
export default ItemDetails;