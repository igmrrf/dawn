import React, { Component } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import API from "../../../helpers/API";

export class SecuritySettings extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			oldPassword: "",
			newPassword: "",
			confirmPassword: "",
			samePassword: true,
			updated: false,
			errorMessage: ""
		};
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onConfirmPassword = this.onConfirmPassword.bind(this);
		this.SubmitPassword = this.SubmitPassword.bind(this);
		this.onOldPassword = this.onOldPassword.bind(this);
	}

	onOldPassword = event => {
		this.setState({ oldPassword: event.target.value });
	};

	onPasswordChange = event => {
		this.setState({ newPassword: event.target.value });
	};

	onConfirmPassword = event => {
		if (event.target.value === this.state.newPassword) {
			this.setState({ samePassword: true });
		} else {
			this.setState({ samePassword: false });
		}
		this.setState({ confirmPassword: event.target.value });
	};

	SubmitPassword = () => {
		if (this.state.newPassword === this.state.confirmPassword) {
			API.post("password?token=" + window.localStorage.getItem("token"), {
				password: this.state.oldPassword,
				newPassword: this.state.newPassword,
				email: this.state.email
			})
				.then(res => {
					const data = res.data;
					if (data.success === true) {
						this.setState({ updated: true });
					} else {
						this.setState({ errorMessage: data.message });
					}
				})
				.catch(err => {
					console.log(err);
				});
		} else {
			this.setState({
				samePassword: false
			});
		}
	};
	render() {
		const { samePassword, errorMessage } = this.state;
		return (
			<div className="password-settings">
				<Container>
					<Row className="first-card-row">
						<Col>
							<Card className="account-cards">
								<Card.Body>
									<Card.Subtitle className="mb-2 text-muted">
										Security Settings
									</Card.Subtitle>
									<Card.Title>Want To Change Password?</Card.Title>
									<Card.Text>Update the following fields</Card.Text>

									<Form>
										{errorMessage && (
											<span className="text-danger">{errorMessage}</span>
										)}

										<Form.Group className="pb-2">
											<Form.Label className="font-weight-bold" htmlFor="email">
												<span>
													<i className="fas fa-lock text-info"></i>
												</span>{" "}
												Old Password: <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control
												type="password"
												placeholder="Enter Old Password"
												name="oldPassword"
												onChange={this.onOldPassword}
											/>
										</Form.Group>
										<Form.Group className="pb-2">
											<Form.Label className="font-weight-bold" htmlFor="email">
												<span>
													<i className="fas fa-key text-info"></i>
												</span>{" "}
												New Password: <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control
												type="password"
												placeholder="Enter New Password"
												name="newPassword"
												onChange={this.onPasswordChange}
											/>
										</Form.Group>
										<Form.Group className="pb-2">
											<Form.Label className="font-weight-bold" htmlFor="email">
												<span>
													<i className="fas fa-key text-info"></i>
												</span>{" "}
												Confirm New Password:{" "}
												<span className="text-danger">*</span>
											</Form.Label>
											<Form.Control
												type="password"
												placeholder="Confirm New Password"
												name="confirm"
												onChange={this.onConfirmPassword}
											/>
											{!samePassword && (
												<span className="text-danger">
													New Passwords don't match
												</span>
											)}
										</Form.Group>
									</Form>

									<button
										className="btn btn-info btn-block"
										type="submit"
										name="submit"
										onClick={this.SubmitPassword}
									>
										<li className="fab fa-btc "></li> Submit
									</button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default SecuritySettings;
