import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function TableAdd(props) {
	const initialState = {
		TableId: "",
		isReserved: "",
		TableCapacity: "",

	};
	const [table, setTable] = useState(initialState);

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		//if (!table.companyName || !table.email) return;
		async function postTable() {
			try {
				const response = await post("/api/tables", table);
				navigate(`/tables/${response.data._id}`);
			} catch (error) {
				console.log("error", error);
			}
		}
		postTable();
	}

	function handleChange(event) {
		setTable({ ...table, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/tables");
	}

	return (
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Create table</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>TableId Name</label>
					<input
						name="TableId"
						type="text"
						required
						value={table.TableId}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>isReserved</label>
					<input
						name="isReserved"
						type="boolean"
						value={table.isReserved}
						onChange={handleChange}
						className="form-control"
					/>
				</div>


				<div className="form-group">
					<label>TableCapacity</label>
					<input
						name="TableCapacity"
						type="number"
						value={table.TableCapacity}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="btn-group">
					<input type="submit" value="Submit" className="btn btn-primary" />
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

export default TableAdd;
