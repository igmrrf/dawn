import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Header from "../Sections/Header";

class Recover extends Component {
	constructor() {
		super();
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onButtonSubmit = this.onButtonSubmit.bind(this);
		this.state = {
			email: "",
			isLoading: false,
			errorMessage: "",
			sent: false,
			message: ""
		};
	}
	onButtonSubmit() {
		this.setState({ isLoading: true });
		fetch("https://pure-peak-96458.herokuapp.com/recover", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: this.state.email
			})
		})
			.then(res => res.json())
			.then(data => {
				if (data.success === true) {
					this.setState({ sent: true });
					this.setState({ message: data.message });
				} else if (data.success === false) {
					this.setState({ isLoading: false });
					this.setState({ errorMessage: data.message });
				}
			})
			.catch(err => {
				this.setState({ isLoading: false });
				this.setState({
					errorMessage: "There was an error reaching out to the server"
				});
			});
	}
	onEmailChange = event => {
		this.setState({ email: event.target.value });
	};
	render() {
		const { isLoading, sent } = this.state;
		return (
			<div
				className="recover"
				style={{
					padding: "120px 0 80px",
					minHeight: "70vh",
					backgroundColor: "rgb(15, 6, 9)"
				}}
			>
				<Container>
					<Header
						heading="Forgot Password"
						paragraph="Enter your account E-mail"
					/>

					<Row className=" mt-5 text-center">
						<Col md={6} className="m-auto">
							<div className="text-danger font-weight-bold">
								<p>{this.state.errorMessage}</p>
							</div>
							<div className="text-info font-weight-bold">
								<p>{this.state.message}</p>
							</div>
							{!sent && (
								<div>
									<Form>
										<Form.Group className="pb-2">
											<Form.Label
												className=" text-white font-weight-bold"
												htmlFor="email"
											></Form.Label>
											<Form.Control
												id="email"
												type="text"
												placeholder="Enter Your E-mail"
												name="email"
												onChange={this.onEmailChange}
											/>
										</Form.Group>
									</Form>

									<div className="d-flex justify-content-center align-content-center">
										<button
											disabled={isLoading}
											onClick={this.onButtonSubmit}
											className="brownBtn"
										>
											{isLoading && (
												<div>
													<Spinner
														animation="border"
														role="status"
														style={{ height: "20px", width: "20px" }}
													></Spinner>{" "}
													Sending
												</div>
											)}
											{!isLoading && <span>Send E-mail</span>}
										</button>
									</div>
								</div>
							)}
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Recover;
