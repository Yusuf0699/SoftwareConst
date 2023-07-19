import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ItemAdd = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('image', image);
    axios.post('/api/items', formData)
      .then(response => {
        console.log('Item added successfully:', response.data);
		navigate('/items/');

      })
      .catch(error => {
        console.error('Item adding failed:', error);
      });
  };
  return (
    <div >
      <h1>Add Item</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required /><br />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={description} onChange={handleDescriptionChange} required></textarea><br />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={price} onChange={handlePriceChange} required /><br />

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange} required /><br />

        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" onChange={handleImageChange} required /><br />

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ItemAdd;

// import React, { useState } from "react";
// import { post } from "axios";
// import { useNavigate } from "react-router-dom";

// function ItemAdd(props) {
// 	const initialState = {
		
// 		name: "",
// 		description: "",
// 		price: "",
// 		quantity: "",
// 		image: "",


// 	};
// 	const [item, setItem] = useState(initialState);

// 	const navigate = useNavigate();

// 	function handleSubmit(event) {
// 		event.preventDefault();
// 		async function postItem() {
// 			try {
// 				const response = await post("/api/items", item);
// 				navigate(`/items/${response.data._id}`);
// 			} catch (error) {
// 				console.log("error", error);
// 			}
// 		}
// 		postItem();
// 	}

// 	function handleChange(event) {
// 		setItem({ ...item, [event.target.name]: event.target.value });
// 	}

// 	function handleCancel() {
// 		navigate("/items");
// 	}


// 	return (
// 		<div className="container" style={{ maxWidth: "400px" }}>
// 			<h1>Create Food item</h1>
// 			<hr />
			
						
// 			<form onSubmit={handleSubmit}>
// 			<div className="form-group">
// 					<label>Image</label>
// 					<input
// 						name="image"
// 						//  type="file" accept="image/*"

// 						value={item.image}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label>Name</label>
// 					<input
// 						name="name"
// 						type="text"
// 						required
// 						value={item.name}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label>Description</label>
// 					<textarea
// 						name="description"
// 						row="10"
// 						value={item.description}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label>price</label>
// 					<input
// 						name="price"
// 						type="number"

// 						value={item.price}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>

// 				<div className="form-group">
// 					<label>quantity</label>
// 					<input
// 						name="quantity"
// 						// type="image"
// 						 type="number"

// 						value={item.quantity}
// 						onChange={handleChange}
// 						className="form-control"
// 					/>
// 				</div>



// 				<div className="btn-group">
// 					<input type="submit" value="Submit" className="btn btn-primary" />
// 					<button
// 						type="button"
// 						onClick={handleCancel}
// 						className="btn btn-secondary"
// 					>
// 						Cancel
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	);
// }

// export default ItemAdd;

// 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


// Yes, there is an input type called "file" which can be used to allow users to upload images. 
//When a user selects a file using this input type, the file is uploaded to the server and can be 
//processed and stored as needed.

// To create an input type that allows users to upload images, you can use the following HTML code:

// graphql
// Copy code
// <input type="file" accept="image/*">
// The accept="image/*" attribute tells the browser to only allow files of type "image" to be selected. 
//You can also specify a specific image file type by using a specific file extension, for example
// accept=".jpg,.png" would only allow JPEG and PNG files to be selected.

// Once the user selects an image file using this input type, you
// can use JavaScript or a server-side scripting language like PHP to process and display the image


// Sure, here are all the input types available in HTML:

// text - for single-line text input.
// password - for single-line text input where the text is hidden (for passwords).
// checkbox - for a checkbox that can be checked or unchecked.
// radio - for a set of radio buttons where only one can be selected.
// submit - for a button that submits a form.
// reset - for a button that resets a form to its default values.
// button - for a button that can trigger a script or function.
// hidden - for a hidden input value that is not displayed on the page.
// file - for uploading files from the user's device.
// email - for email address input validation.
// tel - for telephone number input validation.
// number - for numeric input validation.
// date - for date input validation.
// time - for time input validation.
// datetime-local - for date and time input validation in the user's local time zone.
// month - for month input validation.
// week - for week input validation.
// color - for color input selection.
// It's worth noting that some of these input types may not be fully supported by all browsers or devices, and the behavior and appearance of some input types may vary across different platforms.