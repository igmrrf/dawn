import React, { Component } from "react";
import Header from "../../../../components/Landing/Header/Header";
import Recover from "../../../../components/Landing/Hidden/Recover"
import Footer from "../../../../components/Landing/Footer/Footer";

export default class LoginPage extends Component {
	render() {
		return (
			<div>
				<Header />
				<Recover />
				<Footer />
			</div>
		);
	}
}
