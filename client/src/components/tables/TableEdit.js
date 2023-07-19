import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { useNavigate, useParams } from "react-router-dom";

function TableEdit(props) {
	const initialState = {
		TableId: "",
		isReserved: "",
		TableCapacity: "",
	};
	const [table, setTable] = useState(initialState);

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function updateTable() {
				try {
					const response = await get(`/api/tables/${_id}`);
					setTable(response.data);
				} catch (error) {
					console.log(error);
				}
			}
			updateTable();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps

		
		[props]
	);

	function handleSubmit(event) {
		event.preventDefault();
		async function updateTable() {
			try {
				await patch(`/api/tables/${table._id}`, table);
				navigate(`/tables/${table._id}`);
			} catch (error) {
				console.log(error);
			}
		}
		updateTable();
	}

	function handleChange(event) {
		setTable({ ...table, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate(`/tables/${table._id}`);
	}



						{/* TableId: {
		type: String
	},
	isReserved: {
		type: Boolean
	},
	TableCapacity: {
		type: String,
		required: [true, "Enter Table Capacity"]
	}
}); */}



	return (
		<div className="container">
			<h1>Edit {table.TableId}</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label> TableId</label>
					<input
						name="TableId"
						type="text"
						value={table.TableId}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label>is the Table Reserved?</label>
					<input
						name="isReserved"
						type="boolean"
						value={table.isReserved}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Table Capacity</label>
					<input
						name="TableCapacity"
						type="Number"
						required
						value={table.TableCapacity}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				
				<div className="btn-group">
					<button type="submit" className="btn btn-primary">
						Update
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default TableEdit;
