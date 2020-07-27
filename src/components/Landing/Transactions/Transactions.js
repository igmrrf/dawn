import React, { useState } from "react";
import { Container, Col, Row, Table } from "react-bootstrap";
import Header from "../Sections/Header";

const Transactions = () => {
	const [Date] = useState("12 February 2020");

	return (
		<div className="transaction">
			<Container>
				<Header heading="Latest Transactions" />
				<Row
					className="justify-content-center"
					data-aos="fade-in"
					data-aos-duration="3000"
				>
					<Col>
						<Table
							variant="dark"
							responsive
							striped
							hover
							className="transaction-table"
						>
							<thead className="table-head">
								<tr>
									<th scope="col">Id</th>
									<th scope="col">Amount</th>
									<th scope="col">Plan</th>
									<th scope="col">Date</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row" className="d-flex">
										<span>TNX011598</span>
									</th>
									<td>0.01BTC</td>
									<td>BASIC PLANS</td>
									<td>{Date}</td>
								</tr>
								<tr>
									<th scope="row" className="d-flex">
										<span>TNX011597</span>
									</th>
									<td>0.01BTC</td>
									<td>BASIC PLANS</td>
									<td>{Date}</td>
								</tr>
								<tr>
									<th scope="row" className="d-flex">
										<span>TNX011596</span>
									</th>
									<td>0.01BTC</td>
									<td>BASIC PLANS</td>
									<td>{Date}</td>
								</tr>
								<tr>
									<th scope="row" className="d-flex">
										<span>TNX011595</span>
									</th>
									<td>100BTC</td>
									<td>DIAMOND PLAN</td>
									<td>{Date}</td>
								</tr>
								<tr>
									<th scope="row" className="d-flex">
										<span>TNX011593</span>
									</th>
									<td>0.4BTC</td>
									<td>SILVER PLAN</td>
									<td>{Date}</td>
								</tr>
								<tr>
									<th scope="row" className="d-flex">
										<span>TNX011592</span>
									</th>
									<td>0.12BTC</td>
									<td>SILVER PLAN</td>
									<td>{Date}</td>
								</tr>
								<tr>
									<th scope="row" className="d-flex">
										<span>TNX011591</span>
									</th>
									<td>0.01BTC</td>
									<td>BASIC PLANS</td>
									<td>{Date}</td>
								</tr>
								<tr>
									<th scope="row" className="d-flex">
										<span>TNX011590</span>
									</th>
									<td>0.7BTC</td>
									<td>GOLD PLAN</td>
									<td>{Date}</td>
								</tr>
								<tr>
									<th scope="row" className="d-flex">
										<span>TNX011589</span>
									</th>
									<td>1BTC</td>
									<td>DIAMOND PLAN</td>
									<td>{Date}</td>
								</tr>
								<tr>
									<th scope="row" className="d-flex">
										<span>TNX011588</span>
									</th>
									<td>0.0711BTC</td>
									<td>BASIC PLANS</td>
									<td>{Date}</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Transactions;
