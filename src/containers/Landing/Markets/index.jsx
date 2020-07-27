import React, { Component } from "react";
import Header from "../../../components/Landing/Header/Header";
import Index from "../../../components/Landing/Faq";
import Footer from "../../../components/Landing/Footer/Footer";

export default class FAQ extends Component {
	render() {
		return (
			<div>
				<Header />
				<Index />
				<Footer />
			</div>
		);
	}
}
