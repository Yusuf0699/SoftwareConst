import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TableCardViewHorizontal() {
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
				Table - Row Card View
				<p>
					<Link to="/tables/new" className="btn btn-primary">
						Create table
					</Link>
				</p>
			</h2>
			<hr />

			{tables.map((table) => {
				return (
					<div
						className="card mb-3"
						style={{ maxWidth: "800px" }}
						key={table._id}
					>
						<div className="row g-0">
							<div className="col-md-4 pl-5 ">
								{/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
								<h5>Logo</h5>
							</div>
							<div className="col-md-8">
								<div class="card-header">
									<h5 className="card-title">
										<Link to={`/tables/${table._id}`} className="link-line">
											{table.TableId}
										</Link>
									</h5>
								</div>
								<div className="card-body ">
									<h6 className="d-flex align-items-center">
										<i className="bi bi-telephone-fill text-success"></i>
										<a
											className="card-subtitle m-2"
											href={`tel:+${table.isReserved}`}
										>
											{table.isReserved}
										</a>
									</h6>
									<p className="card-text limit-char">{table.TableCapacity}</p>
									<p className="card-text  d-flex align-items-center">
										<i className="bi bi-geo-alt-fill text-warning"></i>
										<small className="text-muted one-liner">
											{table.TableCapacity}
										</small>
									</p>

									<div class="card-footer">
										<Link
											to={`/tables/${table._id}/edit`}
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
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default TableCardViewHorizontal;
