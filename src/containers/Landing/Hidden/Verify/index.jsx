import React, { Component } from "react";
import Header from "../../../../components/Landing/Header/Header";
import Verify from "../../../../components/Landing/Hidden/Verify";
import Footer from "../../../../components/Landing/Footer/Footer";

export default class LoginPage extends Component {
	render() {
		return (
			<div>
				<Header />
				<Verify />
				<Footer />
			</div>
		);
	}
}
