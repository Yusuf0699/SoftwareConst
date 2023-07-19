import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
function TableTable() {
	const [tables, setTables] = useState([]);

	useEffect(function () {
		async function getTables() {
			try {
				const response = await axios.get("/api/tables");
				setTables(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getTables();
	}, []);

    let navigate = useNavigate();


	return (
		<div className="container">
			<div>
				<h2>
					Table - Table View
					<p>
						<Link to="/tables/new" className="btn btn-primary float-right">
							Create table
						</Link>

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
						<th>TableId</th>
						<th>is the Table Resereved?</th>
						<th>Table Capacity</th>
						<th>View</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{tables &&
						tables.map((table) => {
							return (
								<tr key={table._id}>
									<td>
										<Link to={`/tables/${table._id}`} className="link-line">
											{table.TableId}
										</Link>
									</td>
									<td>
									{table.isReserved === true ? 'Yes, the table is reserved' : 'The table is not reserved'}</td>
									<td>{table.TableCapacity}</td>
									<td>
										<Link to={`/tables/${table._id}`} className="btn btn-warning">
											View
										</Link>
									</td>
									<td>
										<Link
											to={`/tables/${table._id}/edit`}
											className="btn btn-success"
										>
											Edit
										</Link>
									</td>
									<td>
										<Link
											to={`/tables/${table._id}/delete`}
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

export default TableTable;
