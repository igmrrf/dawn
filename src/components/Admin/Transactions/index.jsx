import React, { Component } from "react";
import API from "../../../helpers/API";
import {
	Row,
	Container,
	Col,
	Card,
	Modal,
	Form,
	Button,
} from "react-bootstrap";

export class index extends Component {
	constructor() {
		super();
		this.state = {
			show: false,
			id: "",
			database: {},
			status: "",
			errorMessage: "",
		};
		this.handleClose = this.handleClose.bind(this);
		this.handleShow = this.handleShow.bind(this);
		this.onSaveChanges = this.onSaveChanges.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleClose = () => {
		this.setState({ show: false });
	};
	handleShow = (event) => {
		this.setState({ show: true, id: event.target.id });
	};

	onSaveChanges = () => {
		API.post("admin/transactions", {
			id: this.state.id,
			status: this.state.status,
		})
			.then((res) => {
				const data = res.data;
				if ((data.success = true)) {
					this.handleClose();
				} else {
					this.setState({ errorMessage: "User info not updated successfully" });
				}
			})
			.catch((err) => {
				this.setState({ errorMessage: "User info not updated successfully" });
			});
	};

	componentDidMount() {
		API.get("admin/transactions")
			.then((res) => {
				const data = res.data;

				this.setState({ database: data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		const { database, errorMessage, show } = this.state;
		const Transactions = Object.keys(database).map((k, i) => {
			let data = database[k];
			return (
				<Card className="single-card" key={k}>
					<Card.Header>{data.status}</Card.Header>
					<Card.Body>
						<Card.Title>{data.name}</Card.Title>
						<Card.Subtitle>{data.email}</Card.Subtitle>
						<Card.Text>{data.amount}</Card.Text>
						<Card.Text>{data.plan}</Card.Text>
						<Card.Text>{data.date}</Card.Text>
						{data.type === "Deposit" ? (
							<Card.Img
								src={data.receipt_url}
								style={{
									minWidth: "200px",
									minHeight: "200px",
									width: "200px",
									height: "250px",
								}}
							/>
						) : (
							<Card.Text>{data.type}</Card.Text>
						)}
					</Card.Body>
					<Card.Footer className="text-muted ">
						<span>
							<button id={data._id} onClick={this.handleShow}>
								Edit
							</button>
						</span>
					</Card.Footer>
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
					<Row>
						<Col>
							{show && (
								<Modal show={true} onHide={this.handleClose} centered>
									<Modal.Header closeButton>
										<div>{errorMessage}</div>
										<Modal.Title>Edit Information</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Form>
											<Form.Group controlId="totalDeposit">
												<Form.Label>Status:</Form.Label>
												<Form.Control
													name="status"
													type="text"
													placeholder="Transaction Status"
													onChange={this.onChange}
												/>
											</Form.Group>
										</Form>
									</Modal.Body>
									<Modal.Footer>
										<Button variant="secondary" onClick={this.handleClose}>
											Close
										</Button>
										<Button variant="primary" onClick={this.onSaveChanges}>
											Save Changes
										</Button>
									</Modal.Footer>
								</Modal>
							)}
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default index;
