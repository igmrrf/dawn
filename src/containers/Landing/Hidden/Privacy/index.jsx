import React, { Component } from "react";
import Header from "../../../../components/Landing/Header/Header";
import Privacy from "../../../../components/Landing/Hidden/Privacy";
import Footer from "../../../../components/Landing/Footer/Footer";

export default class LoginPage extends Component {
	render() {
		return (
			<div>
				<Header />
				<Privacy />
				<Footer />
			</div>
		);
	}
}
