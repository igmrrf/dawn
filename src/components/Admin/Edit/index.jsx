import React, { Component } from "react";
import API from "../../../helpers/API";
import { Row, Container, Col, Form, Card } from "react-bootstrap";

export class index extends Component {
	constructor() {
		super();
		this.state = {
			user: {},
			id: 0,
			email: "",
			first_name: "",
			last_name: "",
			plan: "",
			password: "",
			total_profit: 0,
			total_deposit: 0,
			total_withdrawals: 0,
			total_referrals: 0,
			mobile: 0,
			country: "",
			balance: 0,
			errorMessage: "",
			total_total: 0
		};
		this.onRequestInfo = this.onRequestInfo.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.onUpdateBalances = this.onUpdateBalances.bind(this);
	}
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });

	};

	onRequestInfo() {
		API.post("admin/edit", { userId: this.state.id })
			.then(res => {
				const data = res.data;
				if (data) {
					this.setState({ email: data.email });
					this.setState({ first_name: data.first_name });
					this.setState({ last_name: data.last_name });
					this.setState({ country: data.country });
					this.setState({ mobile: data.mobile });
					this.setState({ total_deposit: data.total.deposit });
					this.setState({ total_profit: data.total.profit });
					this.setState({ total_withdrawals: data.total.withdraw });
					this.setState({ total_referrals: data.total.referral });
					this.setState({ total_total: data.total.total });
					this.setState({ plan: data.plan });
					this.setState({ balance: data.balance });
					this.setState({ password: data.password });
				} else {
					this.setState({ errorMessage: data.message });
					window.location.href = "/";
				}
			})
			.catch(err => {
				this.setState({ errorMessage: "There has been a server error" });
			});
	}
	onUpdateBalances = () => {
		API.post("/admin/edit/balances", {
			email: this.state.email,
			balance: this.state.balance,
			plan: this.state.plan,
			total_deposit: this.state.total_deposit,
			total_withdrawals: this.state.total_withdrawals,
			total_referrals: this.state.total_referrals,
			total_profit: this.state.total_profit,
			total_total: this.state.total_total
		})
			.then(res => {
				const data = res.data;
				if ((data.success = true)) {
					this.setState({ errorMessage: "User info updated successfully" });
				} else {
					this.setState({ errorMessage: "User info not updated successfully" });
				}
			})
			.catch(err => {
				this.setState({ errorMessage: "User info not updated successfully" });
			});
	};
	onUpdate = () => {
		API.post("/admin/edit/info", {
			email: this.state.email,
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			country: this.state.country,
			mobile: this.state.mobile,
			password: this.state.password
		})
			.then(res => {
				const data = res.data;
				if ((data.success = true)) {
					this.setState({ errorMessage: "User info updated successfully" });
				} else {
					this.setState({ errorMessage: "User info not updated successfully" });
				}
			})
			.catch(err => {
				this.setState({ errorMessage: "User info not updated successfully" });
			});
	};

	onDelete = () => {
		API.post("/admin/edit/delete", {
			email: this.state.email
		})
			.then(res => {
				const data = res.data;
				if ((data.success = true)) {
					this.setState({ errorMessage: "User info updated successfully" });
				} else {
					this.setState({ errorMessage: "User has been deleted successfully" });
				}
			})
			.catch(err => {
				this.setState({ errorMessage: "User deletion was unsuccessfully" });
			});
	};
	render() {
		const {
			errorMessage,
			first_name,
			country,
			last_name,
			mobile,
			email,
			plan,
			password,
			balance,
			total_profit,
			total_deposit,
			total_withdrawals,
			total_total
		} = this.state;
		return (
			<div>
				<Container className="my-5">
					<Row className="d-flex justify-content-center my-5">
						<Col md={10}>
							<Card data-aos="fade-up">
								<Card.Body>
									<Form>
										<Form.Group className="pb-1">
											<Form.Label
												className="font-weight-bold"
												htmlFor="first_name"
											>
												<span>
													<i className="fas fa-id-card text-info"></i>
												</span>{" "}
												Enter User Id: <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control
												id="Id"
												type="text"
												name="id"
												placeholder="User ID from the Investors Table"
												onChange={this.onChange}
											/>
										</Form.Group>
									</Form>
									<button className="haveAccount" onClick={this.onRequestInfo}>
										Submit
									</button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={6} className="my-5">
							<Card data-aos="fade-up">
								{errorMessage}
								<Card.Body>
									<h2>Details</h2>
									<Form>
										<Form.Group className="pb-1">
											<Form.Label
												className="font-weight-bold"
												htmlFor="first_name"
											>
												<span>
													<i className="fas fa-id-card text-info"></i>
												</span>{" "}
												First Name:
											</Form.Label>
											<Form.Control
												id="first_name"
												type="text"
												name="first_name"
												value={first_name}
												placeholder="First Name"
												onChange={this.onChange}
											/>
										</Form.Group>
										<Form.Group className="pb-1">
											<Form.Label
												className="font-weight-bold"
												htmlFor="last_name"
											>
												<span>
													<i className="fas fa-id-card text-info"></i>
												</span>{" "}
												Last Name:
											</Form.Label>
											<Form.Control
												id="last_name"
												name="last_name"
												type="text"
												placeholder="Last Name"
												value={last_name}
												onChange={this.onChange}
											/>
										</Form.Group>

										<Form.Group className="pb-1">
											<Form.Label className="font-weight-bold" htmlFor="email">
												<span>
													<i className="fas fa-envelope text-info"></i>
												</span>{" "}
												E-mail:
											</Form.Label>
											<Form.Control
												id="email"
												name="email"
												type="text"
												placeholder="E-mail"
												value={email}
												onChange={this.onChange}
											/>
										</Form.Group>

										<Form.Group className="pb-1">
											<Form.Label
												className="font-weight-bold"
												htmlFor="secret-key"
											>
												<span>
													<i className="fas fa-lock text-info"></i>
												</span>{" "}
												Password:
											</Form.Label>
											<Form.Control
												id="secret-key"
												name="password"
												placeholder="Secret Key"
												value={password}
												onChange={this.onChange}
											/>
										</Form.Group>
										<Form.Group className="pb-1">
											<Form.Label className="font-weight-bold" htmlFor="mobile">
												<span>
													<i className="fas fa-lock text-info"></i>
												</span>{" "}
												Mobile:
											</Form.Label>
											<Form.Control
												id="mobile"
												name="mobile"
												type="text"
												placeholder="Mobile Number"
												value={mobile}
												onChange={this.onChange}
											/>
										</Form.Group>
										<Form.Group className="pb-1">
											<Form.Label
												className="font-weight-bold"
												htmlFor="country"
											>
												<span>
													<i className="fas fa-lock text-info"></i>
												</span>{" "}
												Country:
											</Form.Label>
											<Form.Control
												id="country"
												name="country"
												placeholder="Country"
												value={country}
												onChange={this.onChange}
											/>
										</Form.Group>
									</Form>

									<button className="haveAccount" onClick={this.onUpdate}>
										Update
									</button>
								</Card.Body>
							</Card>
						</Col>
						<Col md={6} className="my-5">
							<Card data-aos="fade-up">
								{errorMessage}
								<Card.Body>
									<h2>Balances</h2>
									<Form>
										<Form.Group className="pb-1">
											<Form.Label className="font-weight-bold" htmlFor="plan">
												<span>
													<i className="fas fa-envelope text-info"></i>
												</span>{" "}
												Plan:
											</Form.Label>
											<Form.Control
												id="plan"
												name="plan"
												type="text"
												placeholder="Plan"
												value={plan}
												onChange={this.onChange}
											/>
										</Form.Group>
										<Form.Group className="pb-1">
											<Form.Label
												className="font-weight-bold"
												htmlFor="balance"
											>
												<span>
													<i className="fas fa-id-card text-info"></i>
												</span>{" "}
												Balance: <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control
												id="balance"
												name="balance"
												type="text"
												placeholder="Balance"
												value={balance}
												onChange={this.onChange}
											/>
										</Form.Group>

										<Form.Group className="pb-1">
											<Form.Label
												className="font-weight-bold"
												htmlFor="total_deposit"
											>
												<span>
													<i className="fas fa-envelope text-info"></i>
												</span>{" "}
												Total Deposit: <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control
												id="total_deposit"
												name="total_deposit"
												type="text"
												placeholder="Total Deposit"
												value={total_deposit}
												onChange={this.onChange}
											/>
										</Form.Group>
										<Form.Group className="pb-1">
											<Form.Label
												className="font-weight-bold"
												htmlFor="total_profit"
											>
												<span>
													<i className="fas fa-id-card text-info"></i>
												</span>{" "}
												Total Profit: <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control
												id="total_profit"
												type="text"
												name="total_profit"
												placeholder="Total Profit"
												value={total_profit}
												onChange={this.onChange}
											/>
										</Form.Group>
										<Form.Group className="pb-1">
											<Form.Label
												className="font-weight-bold"
												htmlFor="total_total"
											>
												<span>
													<i className="fas fa-lock text-info"></i>
												</span>{" "}
												Total Total:
											</Form.Label>
											<Form.Control
												id="total_total"
												name="total_total"
												placeholder="Total Total"
												value={total_total}
												onChange={this.onChange}
											/>
										</Form.Group>
										<Form.Group className="pb-1">
											<Form.Label
												className="font-weight-bold"
												htmlFor="total_withdrawals"
											>
												<span>
													<i className="fas fa-lock text-info"></i>
												</span>{" "}
												Total Withdrawals:
											</Form.Label>
											<Form.Control
												id="total_withdrawals"
												name="total_withdrawals"
												type="text"
												placeholder="Total Withdrawals"
												value={total_withdrawals}
												onChange={this.onChange}
											/>
										</Form.Group>
									</Form>

									<button
										className="haveAccount"
										onClick={this.onUpdateBalances}
									>
										Update
									</button>
								</Card.Body>
							</Card>
						</Col>
					</Row>

					<Row>
						<button
							className="haveAccount"
							style={{
								width: "50%",
								background: "red",
								border: "2px solid red",
								color: "white",
								fontSize: "20px"
							}}
							onClick={this.onDelete}
						>
							Delete
						</button>
					</Row>
				</Container>
			</div>
		);
	}
}

export default index;
