import React, { Component } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import API from "../../../helpers/API";

export class ProfileSettings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			first_name: "",
			last_name: "",
			mobile: "",
			country: "",
			errorMessage: ""
		};

		this.onUpdateSubmit = this.onUpdateSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	UNSAFE_componentWillMount() {
		API.get("profile?token=" + window.localStorage.getItem("token"))
			.then(res => {
				const data = res.data;
				if (data) {
					this.setState({ email: data.email });
					this.setState({ first_name: data.first_name });
					this.setState({ last_name: data.last_name });
					this.setState({ country: data.country });
					this.setState({ mobile: data.mobile });
				} else {
					this.setState({ errorMessage: data.message });
					window.location.href = "/";
				}
			})
			.catch(err => {
				this.setState({ errorMessage: "There has been a server error" });
			});
	}

	onUpdateSubmit = () => {
		API.post("profile?token=" + window.localStorage.getItem("token"), {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			country: this.state.country,
			mobile: this.state.mobile,
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
				this.setState({ errorMessage: "There has been a server error" });
			});
	};
	render() {
		const {
			errorMessage,
			first_name,
			country,
			last_name,
			mobile,
			email
		} = this.state;
		return (
			<div className="profile-settings">
				<Container>
					<Row className="first-card-row">
						<Col>
							<Card className="account-cards">
								<Card.Body>
									<Card.Title className="mb-2 text-muted">
										Profile Settings
									</Card.Title>

									<Card.Text>Update the following fields</Card.Text>

									<Form>
										{errorMessage && (
											<span className="text-danger">{errorMessage}</span>
										)}
										<Form.Group className="pb-2">
											<Form.Label className="font-weight-bold" htmlFor="email">
												<span>
													<i className="fas fa-id-card text-info"></i>
												</span>{" "}
												First Name: <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control
												type="text"
												name="first_name"
												value={first_name}
												onChange={this.handleChange}
											/>
										</Form.Group>

										<Form.Group className="pb-2">
											<Form.Label className="font-weight-bold" htmlFor="email">
												<span>
													<i className="fas fa-id-card text-info"></i>
												</span>{" "}
												Last Name: <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control
												type="text"
												name="last_name"
												value={last_name}
												onChange={this.handleChange}
											/>
										</Form.Group>
										<Form.Group className="pb-2">
											<Form.Label className="font-weight-bold" htmlFor="email">
												<span>
													<i className="fas fa-envelope text-info"></i>
												</span>{" "}
												Your E-mail: <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control
												type="email"
												name="email"
												value={email}
												onChange={this.handleChange}
											/>
										</Form.Group>

										<Form.Group className="pb-2">
											<Form.Label className="font-weight-bold" htmlFor="email">
												<span>
													<i className="fas fa-phone text-info"></i>
												</span>{" "}
												Mobile: <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control
												type="text"
												name="mobile"
												value={mobile}
												onChange={this.handleChange}
											/>
										</Form.Group>
										<Form.Group className="pb-2">
											<Form.Label className="font-weight-bold" htmlFor="email">
												<span>
													<i className="fas fa-globe-africa text-info"></i>
												</span>{" "}
												Country: <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control
												type="text"
												name="country"
												value={country}
												onChange={this.handleChange}
											/>
										</Form.Group>
									</Form>

									<button
										className="btn btn-info btn-block"
										type="submit"
										name="submit"
										onClick={this.onUpdateSubmit}
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

export default ProfileSettings;
