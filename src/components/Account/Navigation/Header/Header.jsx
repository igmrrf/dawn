import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import API from "../../../../helpers/API";

const Link = require("react-router-dom").Link;

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			errMessage: "",
		};

		this.logOut = this.logOut.bind(this);
		this.onError = this.onError.bind(this);
	}
	onError() {
		this.setState({ errMessage: "There was an error getting the information" });
	}
	logOut() {
		API.post("/logout?token=" + window.localStorage.getItem("token"))
			.then((res) => {
				const data = res.data;
				if (data.success === true) {
					window.location.href = "/";
				} else {
					this.onError();
				}
			})
			.catch((err) => {
				this.onError();
			});
	}
	render() {
		return (
			<Navbar className="account-header">
				<Container md-fluid="true">
					<Navbar.Brand href="/account/dashboard" className="account-logo">
						<h2 className="text-white font-weight-bold">
							Dash
							<span className="text-danger ">Trade</span>
						</h2>
					</Navbar.Brand>
					<Nav className="ml-auto hover-main">
						<span className="user text-white">
							Hi {this.props.user_last_name} <i className="fa fa-user-alt"></i>
						</span>
						<div className="hover-sub">
							<Link to="/account/settings">
								<span className="top-link">
									<i className="fas fa-cog"></i>Settings
								</span>
							</Link>
							<Link onClick={this.logOut} to="/">
								<span className="top-link">
									<i className="fas fa-sign-out-alt"></i>Logout
								</span>
							</Link>
						</div>
					</Nav>
				</Container>
			</Navbar>
		);
	}
}

export default Header;
