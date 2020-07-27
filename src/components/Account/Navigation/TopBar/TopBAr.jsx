import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import API from "../../../../helpers/API";

export class TopBar extends Component {
	constructor() {
		super();
		this.state = {
			errorMessage: ""
		};
		this.onError = this.onError.bind(this);
		this.logOut = this.logOut.bind(this);
	}

	onError() {
		return this.setState({
			errorMessage: "There has been a server error, Please bear with us"
		});
	}
	logOut() {
		API.post("/logout?token=" + window.localStorage.getItem("token"))
			.then(res => {
				const data = res.data;
				if (data.success === true) {
					window.location.href = "/";
				} else {
					this.onError();
				}
			})
			.catch(err => {
				this.onError();
			});
	}
	render() {
		return (
			<Navbar collapseOnSelect variant="dark" expand="md" className="topNav">
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Container>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className=" nav-links mr-auto">
							<Nav.Link href="/account/dashboard" className="nav-link">
								<span>
									<i className="fas fa-globe nav-icon "></i> Dashboard
								</span>
							</Nav.Link>
							<Nav.Link href="/account/wallet" className="nav-link">
								<span>
									<i className="fas fa-wallet nav-icon"></i> Wallet
								</span>
							</Nav.Link>
							<Nav.Link href="/account/investment" className="nav-link">
								<span>
									<i className="fas fa-chart-line nav-icon"></i> Investment
									Plans
								</span>
							</Nav.Link>
							<Nav.Link href="/account/deposit" className="nav-link">
								<span>
									<i className="fas fa-download nav-icon"></i> Deposit
								</span>
							</Nav.Link>

							<Nav.Link href="/account/transactions" className="nav-link">
								<span>
									<i className="fas fa-exchange-alt nav-icon"></i>
									Transactions
								</span>
							</Nav.Link>
							<Nav.Link href="/account/settings" className="nav-link">
								<span>
									<i className="fas fa-cog nav-icon"></i>
									Settings
								</span>
							</Nav.Link>
							<Nav.Link onClick={this.logOut} className="nav-link">
								<span>
									<i className="fas fa-sign-out-alt nav-icon"></i>
									Logout
								</span>
							</Nav.Link>
						</Nav>
						<Nav className="withdraw">
							<Nav.Link href="/account/withdrawal" className="nav-link">
								<span>
									<i className="fas fa-money-check-alt nav-icon"></i> Withdraw
								</span>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default TopBar;
