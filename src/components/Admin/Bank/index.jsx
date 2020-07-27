import React, { Component } from "react";
import API from "../../../helpers/API";
import { Row, Container, Col, Card } from "react-bootstrap";

export class index extends Component {
	constructor() {
		super();
		this.state = {
			id: "",
			database: {},
			status: "",
			errorMessage: "",
		};
	}

	componentDidMount() {
		API.get("admin/bank")
			.then((res) => {
				const data = res.data;
				this.setState({ database: data.message });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		const { database } = this.state;
		const Transactions = Object.keys(database).map((k, i) => {
			let data = database[k];
			return (
				<Card className="single-card" key={k}>
					<Card.Header>Acc Name: {data.acc_name}</Card.Header>
					<Card.Body>
						<Card.Text>Email: {data.email}</Card.Text>
						<Card.Text>Bank: {data.bank_name}</Card.Text>
						<Card.Text>Bank Code: {data.bank_code}</Card.Text>
						<Card.Text>Acc Type: {data.acc_type}</Card.Text>
						<Card.Text>Acc No.: {data.acc_number}</Card.Text>
					</Card.Body>
				</Card>
			);
		});

		return (
			<div>
				<Container className="my-5">
					<Row>
						<Col>
							<div className="Cards">{Transactions}</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default index;
