import React, { Component } from "react";
import Header from "../../../components/Landing/Header/Header";
import Statistics from "../../../components/Landing/Statistics/Statistics";
import About from "../../../components/Landing/About/About";
import Footer from "../../../components/Landing/Footer/Footer";
import Partners from "../../../components/Landing/Partners/Partners";

export default class AboutPage extends Component {
	render() {
		return (
			<div>
				<Header />
				<About />
				<Partners />
				<Footer />
			</div>
		);
	}
}
