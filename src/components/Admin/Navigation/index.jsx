import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";
import API from "../../../helpers/API";

export class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errorMessage: ""
		};
		this.onError = this.onError.bind(this);
		this.logOut = this.logOut.bind(this);
	}
	componentDidMount() {
		API.get("admin/verify?token=" + window.localStorage.getItem("token"))
			.then(res => {
				const data = res.data;

				if (data.success === false) {
					window.location.href = "/";
					alert("You Don't Access to the required content");
				} else if (data.admin === true) {
					this.setState({ wallet: data.wallet });
				}
			})
			.catch(err => {
				this.setState({ errMessage: err });
			});
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
			<div className="header homepage">
				<Container>
					<Row>
						<Col>
							<Navbar bg="transparent" expand="lg" sticky="top" variant="dark">
								<Navbar.Brand href="/" className="logo">
									<h1 className="text-white font-weight-bold">
										Dash
										<span className="text-danger ">Trade</span>
									</h1>
								</Navbar.Brand>
								<Navbar.Toggle aria-controls="basic-navbar-nav" />
								<Navbar.Collapse id="basic-navbar-nav">
									<ul className="navbar-nav ml-auto">
										<li className="nav-item active">
											<Link to="/asghdjklajsj">
												<div className="nav-link">Dashboard</div>
											</Link>
										</li>
										<li className="nav-item active">
											<Link to="/asghdjklajsj/transactions">
												<div className="nav-link">Transactions</div>
											</Link>
										</li>

										<li className="nav-item">
											<Link to="/asghdjklajsj/investors">
												<div className="nav-link">Investors</div>
											</Link>
										</li>
										<li className="nav-item active">
											<Link to="/asghdjklajsj/edit">
												<div className="nav-link">Edit</div>
											</Link>
										</li>

										<li className="nav-item">
											<Link to="/asghdjklajsj/bank">
												<div className="nav-link">Bank Details</div>
											</Link>
										</li>
										<li className="nav-item">
											<Link>
												<div className="nav-link" onClick={() => this.logOut()}>
													Logout
												</div>
											</Link>
										</li>
									</ul>
								</Navbar.Collapse>
							</Navbar>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default index;
