import React from "react";
import Navigation from "../../../components/Account/Navigation/Navigation";
import "../../../assets/Account/css/style.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../../components/Account/Navigation/Footer";
import Form from "react-bootstrap/Form";
import API from "../../../helpers/API";
import Upload from "../../../components/Account/Upload";
import BarCode from "../../../assets/Landing/img/wallet.png";

class Deposit extends React.Component {
	constructor() {
		super();
		this.state = {
			errorMessage: "",
			amount: 0,
			plan: "Basic",
			type: "Deposit",
			wallet: "",
			currency: "",
		};

		this.onPlanChange = this.onPlanChange.bind(this);
		this.onAmountChange = this.onAmountChange.bind(this);
	}

	onPlanChange = (event) => {
		this.setState({ plan: event.target.value });
	};

	onAmountChange = (event) => {
		this.setState({ amount: event.target.value });
	};
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

		API.get("wallet/address")
			.then((res) => {
				const data = res.data;
				this.setState({ wallet: data });
			})
			.catch((err) => {
				this.setState({
					errorMessage: "There's has been an error getting wallet",
				});
			});
	}

	render() {
		const { wallet, amount, type, plan, currency } = this.state;
		return (
			<div className="deposit" style={{ background: "#1d1d52" }}>
				<Navigation />

				<Container>
					<Row className="d-flex justify-content-center">
						<Col md={9}>
							<Card className="account-cards text-center">
								<Card.Body>
									<Card.Title className="mb-2 text-left">Deposit</Card.Title>
									<Form>
										<Form.Group controlId="depositSelect">
											<Form.Label>Select Plan</Form.Label>
											<Form.Control as="select" onChange={this.onPlanChange}>
												{currency === "R" ? (
													<>
														<option value="Basic">
															BASIC PLANS-14days(R1000 - R10,000)
														</option>
														<option value="Silver">
															SILVER PLAN-10days(R10,000 - R50,000)
														</option>
														<option value="Gold">
															GOLD PLAN-6days(R50,000 - R250,000)
														</option>
														<option value="Diamond">
															DIAMOND PLAN-3days(R250,000 - R1,000,000)
														</option>
													</>
												) : (
													<>
														<option value="Basic">
															BASIC PLANS-14days($100 - $1,000)
														</option>
														<option value="Silver">
															SILVER PLAN-10days($1,000 - $10,000)
														</option>
														<option value="Gold">
															GOLD PLAN-6days($10,000 - $100,000)
														</option>
														<option value="Diamond">
															DIAMOND PLAN-3days($100,000 - $10,000,000)
														</option>
													</>
												)}
											</Form.Control>
										</Form.Group>
										<Form.Group controlId="depositAmount">
											<Form.Label>Amount Deposited</Form.Label>
											<Form.Control
												type="text"
												onChange={this.onAmountChange}
												placeholder="Enter Amount"
											/>
										</Form.Group>
										<h4>Make All Deposit To Bitcoin Address Below</h4>
										<img
											src={BarCode}
											height="250px"
											width="250px"
											alt="BTC Address"
										/>
										<h4>Address:</h4>
										<h5>{wallet}</h5>

										<span className="note-text text-danger">
											<i className="fas fa-times-circle text-danger"></i> Do not
											deposit less than the minimum required amount in each plan
										</span>
										<br />
										<Card.Text>
											Copy the Wallet Address & Choose your means of payment
										</Card.Text>
										<Row>
											<Col>
												<span>
													<button className="btn btn-primary">
														<a
															href="https://payments.changelly.com/"
															target="_blank"
															rel="noopener noreferrer"
															style={{ color: "white" }}
														>
															<li className="fab fa-btc "></li> Via CHANGELLY
														</a>
													</button>
												</span>
												<Card.Text>
													<strong>Credit or Debit Card</strong>
												</Card.Text>
											</Col>
											<Col>
												<span>
													<button className="btn btn-primary">
														<a
															href="https://play.google.com/store/apps/details?hl=en&id=co.bitx.android.wallet"
															target="_blank"
															rel="noopener noreferrer"
															style={{ color: "white" }}
														>
															<li className="fab fa-btc "></li> Via LUNO
														</a>
													</button>
												</span>
												<div>
													<strong>Luno Account</strong>
												</div>
											</Col>
										</Row>

										<p>
											<strong>Note</strong>: It may take 12-24 hours for your
											transaction to be confirmed
										</p>
										<Form.Group>
											<Upload type={type} plan={plan} amount={amount} />
										</Form.Group>
										<Card.Title>NOTE: Upload payment receipt</Card.Title>
									</Form>
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

export default Deposit;
