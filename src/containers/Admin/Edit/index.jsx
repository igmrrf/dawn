import React, { Component } from "react";
import Navigation from "../../../components/Admin/Navigation";
import Edit from "../../../components/Admin/Edit";

class index extends Component {
	render() {
		return (
			<div className="Admin">
				<Navigation />
				<Edit />
			</div>
		);
	}
}

export default index;
