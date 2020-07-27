import React, { Component } from "react";
import Header from "../../../components/Landing/Header/Header";
import Message from "../../../components/Landing/Message/Message";
import Footer from "../../../components/Landing/Footer/Footer";

export default class Contact extends Component {
	render() {
		return (
			<div>
				<Header />
				<Message />
				<Footer />
			</div>
		);
	}
}
