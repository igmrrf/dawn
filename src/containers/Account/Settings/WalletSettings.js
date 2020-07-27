import React, { Component } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import API from "../../../helpers/API";

export class WalletSettings extends Component {
	constructor() {
		super();
		this.state = {
			addWallet: "",
			confirmAddress: "",
			sameAddress: true,
			updated: false,
			errorMessage: ""
		};
		this.onAddressChange = this.onAddressChange.bind(this);
		this.onConfirmAddress = this.onConfirmAddress.bind(this);
		this.SubmitAddress = this.SubmitAddress.bind(this);
	}

	onAddressChange = event => {
		this.setState({ addWallet: event.target.value });
	};

	onConfirmAddress = event => {
		if (event.target.value === this.state.addWallet) {
			this.setState({ sameAddress: true });
		} else {
			this.setState({ sameAddress: false });
		}
		this.setState({ confirmAddress: event.target.value });
	};

	SubmitAddress = () => {
		API.post("wallet?token=" + window.localStorage.getItem("token"), {
			wallet: this.state.addWallet
		})
			.then(res => {
				const data = res.data;
				if (data.success === true) {
					this.setState({ updated: true });
					window.location.href = "/account/wallet";
				} else {
					this.setState({ errorMessage: data.message });
				}
			})
			.catch(err => {
				this.setState({
					errorMessage: "There's been an error updating your wallet address"
				});
			});
	};

	render() {
		const { sameAddress, errorMessage } = this.state;
		return (
			<div className="wallet-settings">
				<Container>
					<Row className="first-card-row">
						<Col>
							<Card style={{ marginTop: "50px" }}>
								<Card.Body>
									<Card.Subtitle className="mb-2 text-muted">
										Wallet
									</Card.Subtitle>

									<Card.Title>Edit Wallet Address</Card.Title>

									<Form>
										{errorMessage && (
											<span className="text-danger">{errorMessage}</span>
										)}
										<Form.Group className="pb-2">
											<Form.Control
												type="text"
												placeholder="Add Wallet"
												name="wallet"
												onChange={this.onAddressChange}
											/>
										</Form.Group>
										<Form.Group className="pb-2">
											<Form.Control
												type="text"
												placeholder="Confirm Wallet"
												name="confirm"
												onChange={this.onConfirmAddress}
											/>
										</Form.Group>
										{!sameAddress && (
											<span className="text-danger">
												Wallet Addresses are not the same
											</span>
										)}
									</Form>
									<button
										className="btn btn-info btn-block"
										type="submit"
										name="submit"
										onClick={this.SubmitAddress}
									>
										<li className="fab fa-btc "></li> Add
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

export default WalletSettings;
