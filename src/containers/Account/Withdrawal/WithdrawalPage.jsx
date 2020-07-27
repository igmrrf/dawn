import React, { Component } from "react";
import Navigation from "../../../components/Account/Navigation/Navigation";
import "../../../assets/Account/css/style.css";
import Footer from "../../../components/Account/Navigation/Footer";
import { Link } from "react-router-dom";
import API from "../../../helpers/API";
import {
	Container,
	Row,
	Col,
	Card,
	Modal,
	Form,
	Button,
	ProgressBar,
} from "react-bootstrap";

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "Withdraw",
			stop: false,
			show: false,
			progress: 0,
			message: "",
			balance: 0,
			amount: 0,
			wallet: "",
			addWallet: "",
		};
		this.handleClose = this.handleClose.bind(this);
		this.handleShow = this.handleShow.bind(this);
		this.onWithdrawSubmit = this.onWithdrawSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}
	componentDidMount() {
		API.get("verify?token=" + window.localStorage.getItem("token"))
			.then((res) => {
				const data = res.data;
				if (data.success === false) {
					window.location.href = "/";
				} else {
					this.setState({ wallet: data.wallet });
					this.setState({ plan: data.plan });
					this.setState({ balance: data.balance });
				}
			})
			.catch((err) => {
				this.setState({ errorMessage: "There has been a server error" });
			});
	}

	onInputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleShow = (e) => {
		e.preventDefault();
		this.setState({ show: true, progress: 0, stop: false });

		this.increaseNumber();
	};
	handleClose = () => {
		this.setState({ show: false });
	};

	increaseNumber = () => {
		setInterval(() => {
			if (this.state.progress < 100) {
				this.setState({ progress: this.state.progress + 1 });
			} else if (this.state.stop === false) {
				this.handleClose();
				this.setState({
					message: "Your Request is being Processed",
				});
				this.onWithdrawSubmit();
			} else {
				clearInterval(this.increaseNumber);
			}
		}, 50);
	};

	onWithdrawSubmit() {
		this.setState({ stop: true });
		if (this.state.balance < this.state.amount) {
			this.setState({
				message: "You have insufficient balance",
				addWallet: "",
			});
			setTimeout(() => {
				window.location.href = "/account/deposit";
			}, 50000);
		} else if (!this.state.wallet) {
			this.setState({
				addWallet: "Please Add Wallet Address",
				message: "",
			});
		} else {
			this.setState({
				balance: this.state.balance - this.state.amount,
			});
			API.post(
				"transaction/withdraw?token=" + window.localStorage.getItem("token"),
				{
					amount: this.state.amount,
					plan: this.state.plan,
					type: this.state.type,
				}
			).then((res) => {
				const data = res.data;
				if (data.success === false) {
					this.setState({ message: data.message });
				} else {
					this.setState({
						message: "Your Withdrawal Process has successfully started",
					});
				}
			});
		}
	}

	render() {
		const { show, message, progress, amount, wallet, addWallet } = this.state;

		return (
			<div className="deposit">
				<Navigation />
				<Container>
					<Row className="d-flex justify-content-center">
						<Col md={8}>
							<Card className="account-cards">
								<div className="text-info font-weight-bolder text-center">
									{message}
								</div>
								<Card.Body>
									<Card.Title> Withdraw</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">
										How much do you want to withdraw?
									</Card.Subtitle>

									<Form>
										<Form.Group controlId="WithdrawAmount">
											<Form.Control
												type="text"
												placeholder="Enter amount you would like to withdraw"
												name="amount"
												value={amount}
												onChange={this.onInputChange}
											/>
										</Form.Group>
										<Form.Group controlId="SelectWithdrawWallet">
											<Form.Label>Select Wallet Address</Form.Label>
											<Form.Control
												as="select"
												onChange={this.onInputChange}
												name="wallet"
											>
												<option>Select or Add Wallet</option>
												{wallet && <option value={wallet}>{wallet}</option>}
											</Form.Control>
										</Form.Group>

										<span className="note-text text-danger">
											<i className="fas fa-times-circle text-danger"></i> Do not
											request for withdrawals greater than your balance
										</span>
										<br />
										<Button
											variant="danger"
											className="add-wallet-details"
											onClick={this.handleShow}
										>
											<li className="fab fa-btc "></li> Withdraw
										</Button>

										<Link to="/account/settings" className="text-white">
											<button className="btn btn-info my-3">Add Wallet</button>
										</Link>
										<div className="text-info font-weight-bolder text-center">
											{addWallet}
										</div>
									</Form>
								</Card.Body>
							</Card>
						</Col>
					</Row>

					<Col>
						{show && (
							<Modal show={true} onHide={this.handleClose} centered>
								<Modal.Body>
									<ProgressBar now={progress} label={`${progress}%`} />
								</Modal.Body>
							</Modal>
						)}
					</Col>
				</Container>

				<Footer />
			</div>
		);
	}
}

export default index;
