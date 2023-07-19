import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TableList() {
	const [tables, setTables] = useState([]);

	useEffect(function () {
		async function getAllTables() {
			try {
				const response = await axios.get("/api/tables");
				setTables(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getAllTables();
	}, []);

	return (
		<div>
			<h2>
				Tables
				<p>
					<Link to="/tables/new" className="btn btn-primary float-right">
						Create table
					</Link>
				</p>
			</h2>


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


			<hr />
			{tables.map((table) => {
				return (
					<div key={table._id}>
						<h4>
							<Link to={`/tables/${table._id}`}>{table.TableId}</Link>
						</h4>
						<div className="btn-group">
							<Link to={`/tables/${table._id}/edit`} className="btn btn-primary">
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

export default TableList;
