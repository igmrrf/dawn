import React, { Component } from "react";
import Navigation from "../../../components/Account/Navigation/Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Footer from "../../../components/Account/Navigation/Footer";
import API from "../../../helpers/API";

export class TransactionPage extends Component {
	state = {
		date: new Date().toLocaleDateString(),
		transaction: {},
		last_name: "",
		plan: "",
		balance: 0,
		total_deposit: 0,
		total_referral: 0,
		total_profit: 0,
		total_withdraw: 0,
		currency: "",
		errorMessage: "",
	};
	UNSAFE_componentWillMount() {
		API.get("verify?token=" + window.localStorage.getItem("token"))
			.then((res) => {
				const data = res.data;
				if (data.success === false) {
					setTimeout(() => {
						window.location = "/";
					}, 1000);
				} else {
					this.setState({ last_name: data.last_name });
					this.setState({ total_profit: data.total.profit });
					this.setState({ total_deposit: data.total.deposit });
					this.setState({ total_withdraw: data.total.withdraw });
					this.setState({ total_referral: data.total.referral });
					this.setState({ balance: data.balance });
				}
			})
			.catch((err) => {
				this.setState({ errorMessage: "Your registration process failed" });
			});
	}

	componentDidMount() {
		const date = new Date();

		const main = String(date);
		const gmt = main.split(" ");
		const GMTZone = gmt[5];
		const mainer = GMTZone.substr(3);
		const addOrMinus = GMTZone.substr(3, 1);


		const NumberGMT = Number(mainer);
		console.log(addOrMinus, NumberGMT);
		if (mainer < 400 && mainer > 100) {
			this.setState({ currency: "R" });
		} else {
			this.setState({ currency: "$" });
		}

		API.get("/transaction?token=" + window.localStorage.getItem("token"))
			.then((res) => {
				const data = res.data;
				if (data.success === false) {
					setTimeout(() => {
						window.location = "/";
					}, 1000);
				} else {
					this.setState({ transaction: data });
				}
			})
			.catch((err) => {
				this.setState({ errorMessage: "There has been a server error" });
			});
	}

	render() {
		const {
			total_deposit,
			total_withdraw,
			total_referral,
			total_profit,
			balance,
			transaction,
			currency,
		} = this.state;
		return (
			<div className="transactions">
				<Navigation />
				<Container>
					<Row>
						<Col md={3}>
							<Card className="account-cards">
								<Card.Body className="text-center transaction-card">
									<Card.Title>Deposits</Card.Title>

									<h1 style={{ color: "#09203f" }}>
										{currency}
										{total_deposit}
									</h1>
									<Card.Text className="text-muted">
										Balance : {currency}
										{balance}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={3}>
							<Card className="account-cards">
								<Card.Body className="text-center  transaction-card">
									<Card.Title>Withdrawals</Card.Title>
									<h1 style={{ color: "#09203f" }}>
										{currency}
										{total_withdraw}
									</h1>
									<Card.Text className="text-muted">
										Balance : {currency}
										{balance}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={3}>
							<Card className="account-cards">
								<Card.Body className="text-center  transaction-card">
									<Card.Title>Profit</Card.Title>
									<h1 style={{ color: "#09203f" }}>
										{currency}
										{total_profit}
									</h1>
									<Card.Text className="text-muted">
										Balance : {currency}
										{balance}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={3}>
							<Card className="account-cards">
								<Card.Body className="text-center  transaction-card">
									<Card.Title>Referral Earnings</Card.Title>
									<h1 style={{ color: "#09203f" }}>
										{currency}
										{total_referral}
									</h1>
									<Card.Text className="text-muted">
										Balance : {currency}
										{balance}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<Card className="account-cards">
								<Card.Body>
									<Card.Title className="mb-2 text-center font-weight-bolder text-monospace  ">
										Transaction History
									</Card.Title>
									<Table striped responsive bordered hover size="sm">
										<thead style={{ background: "#ef0909", color: "white" }}>
											<th>ID</th>
											<th>Transaction</th>
											<th>Amount</th>
											<th>Plan</th>
											<th>Date</th>
											<th>Status</th>
										</thead>
										<tbody>
											{Object.keys(transaction).map((k, i) => {
												let data = transaction[k];
												return (
													<tr key={i}>
														<td>TNX0118{k}</td>
														<td>{data.type}</td>
														<td>
															{currency}
															{data.amount}
														</td>
														<td>{data.plan}</td>
														<td>{data.date}</td>
														<td>
															{data.status === "Pending" ? (
																<span className="btn btn-danger">
																	{data.status}
																</span>
															) : (
																<span className="btn btn-primary">
																	{data.status}
																</span>
															)}
														</td>
													</tr>
												);
											})}
										</tbody>
									</Table>

									<button
										className="btn btn-primary btn-block"
										type="submit"
										name="submit"
									>
										Update <li className="fab fa-btc"></li>
									</button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default TransactionPage;
