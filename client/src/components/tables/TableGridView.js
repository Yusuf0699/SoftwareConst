import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TableGridView() {
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

	return (
		<div className="container">
			<h2>
				Table - Grid View
				<p>
					<Link to="/tables/new" className="btn btn-primary float-right">
						Create table
					</Link>
				</p>
			</h2>
			<hr />

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


			<div>
				<div className="d-flex flex-wrap">
					{tables.map((table) => {
						return (
							<div
								className="card"
								style={{ width: 250, margin: 30 }}
								key={table._id}
							>
								<div class="card-header">
									<h5 className="card-title">
										<Link to={`/tables/${table._id}`} className="link-line">
											{table.TableId}
										</Link>
									</h5>
								</div>
								<div className="card-body">
									<h5 className="d-flex align-items-center">
										<i className="bi bi-telephone-fill text-success"></i>
										<a className="card-subtitle" href={`tel:+${table.isReserved}`}>
											{table.isReserved}
										</a>
									</h5>
									{/* <h6 className="card-subtitle mb-2 text-muted">
										{table.phone}
									</h6> */}
									<p className="card-text limit-char">{table.TableCapacity}</p>
									<p className="card-text d-flex align-items-center">
										<i className="bi bi-geo-alt-fill text-warning"></i>
										<small className="text-muted one-liner">
											{table.TableCapacity}
										</small>
									</p>
								</div>
								<div class="card-footer d-flex align-items-center">
									<Link
										to={`/tables/${tables._id}/edit`}
										className="btn btn-primary"
									>
										Edit
									</Link>
									<span>
										<small>
											<Link to={`/tables/${table._id}`} className="link-line">
												Read More...
											</Link>
										</small>
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default TableGridView;
