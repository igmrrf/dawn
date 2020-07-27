import React, { Component } from "react";
import API from "../../../helpers/API";
import { Row, Container, Col, Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export class index extends Component {
	constructor() {
		super();
		this.state = {
			investors: [],
			search: ""
		};
		this.onSearch = this.onSearch.bind(this);
	}
	onSearch = e => {
		this.setState({ search: e.target.value });
	};

	componentDidMount() {
		API.get("admin")
			.then(res => {
				const data = res.data;
				this.setState({ investors: data });
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		let filteredInvestors = this.state.investors.filter(investor => {
			return investor.last_name.toLowerCase().indexOf(this.state.search) !== -1;
		});
		const Invests = filteredInvestors.map((invest, k) => {
			return (
				<tr key={invest.investor_id}>
					<td>{k}</td>
					<td>
						{invest.first_name} {invest.last_name}
					</td>

					<td>{invest.email}</td>
					<td>{invest.plan}</td>
					<td>{invest.balance}</td>
					<td>
						<Link to="/admin/edit">
							<span>
								<button>Edit</button>
							</span>
						</Link>
					</td>
				</tr>
			);
		});

		return (
			<div>
				<Container className="my-5">
					<Row>
						<Col>
							<div className="d-flex justify-content-between">
								<h1 className="text-white">Investors</h1>

								<Form.Control
									type="search"
									name="search"
									placeholder="Search Investors"
									onChange={this.onSearch}
									style={{
										width: "200px",
										background: "transparent",
										borders: "none",
										color: "red"
									}}
								/>
							</div>

							<Table bordered striped responsive style={{ color: "red" }}>
								<thead>
									<th>Id</th>
									<th>Name</th>
									<th>Email</th>
									<th>Plan</th>
									<th>Balance</th>
									<th>Edit</th>
								</thead>
								<tbody>{Invests}</tbody>
							</Table>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default index;
