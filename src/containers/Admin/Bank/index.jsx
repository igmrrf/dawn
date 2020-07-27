import React, { Component } from "react";
import Navigation from "../../../components/Admin/Navigation";
import Bank from "../../../components/Admin/Bank";

export class index extends Component {
	render() {
		return (
			<div className="Admin">
				<Navigation />
				<Bank />
			</div>
		);
	}
}

export default index;
