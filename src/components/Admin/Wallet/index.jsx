import React from "react";
import { Col, Row, Card, Form } from "react-bootstrap";
import API from "../../../helpers/API";

export default class index extends React.Component {
	constructor() {
		super();
		this.state = {
			wallet: "",
			address: ""
		};
		this.onChange = this.onChange.bind(this);
		this.onUpdateWallet = this.onUpdateWallet.bind(this);
	}
	onChange = event => {
		this.setState({ wallet: event.target.value });
	};
	onUpdateWallet = () => {
		API.post("wallet?token=" + window.localStorage.getItem("token"), {
			wallet: this.state.wallet
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
				this.setState({
					errorMessage: "There's been an error updating your wallet address"
				});
			});
	};

	componentDidMount() {
		API.get("profile?token=" + window.localStorage.getItem("token"))
			.then(res => {
				const data = res.data;
				this.setState({ address: data.wallet });
			})
			.catch(err => {
				this.setState({
					errorMessage: "There was an error fetching your wallet Address"
				});
			});
	}

	render() {
		const { address, errorMessage } = this.state;
		return (
			<div>
				<Row className="d-flex justify-content-start my-5">
					<Col md={6}>
						<div className="text-danger font-weight-bold">
							<p>{errorMessage}</p>
						</div>
						<Card data-aos="fade-up">
							<Card.Body>
								Current Address:
								<br />
								<span className="text-info font-weight-bold mx-2 my2">
									{address}
								</span>
								<br />
								<br />
								<Form>
									<Form.Group className="pb-1">
										<Form.Label
											className="font-weight-bold"
											htmlFor="first_name"
										>
											<span>
												<i className="fas fa-id-card text-info"></i>
											</span>
											Update Deposit Address:{" "}
											<span className="text-danger">*</span>
										</Form.Label>
										<Form.Control
											id="Id"
											type="text"
											name="id"
											placeholder="Enter new Deposit Wallet"
											onChange={this.onChange}
										/>
									</Form.Group>
								</Form>
								<button className="haveAccount" onClick={this.onUpdateWallet}>
									Update
								</button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
