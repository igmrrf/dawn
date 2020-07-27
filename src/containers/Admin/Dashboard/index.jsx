import React, { Component } from "react";
import Navigation from "../../../components/Admin/Navigation";
import Dashboard from "../../../components/Admin/Dashboard";

export class index extends Component {
	render() {
		return (
			<div className="Admin">
				<Navigation />
				<Dashboard />
			</div>
		);
	}
}

export default index;
