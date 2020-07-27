import Transactions from "../../../components/Admin/Transactions";

import React, { Component } from "react";
import Navigation from "../../../components/Admin/Navigation";

export class index extends Component {
	render() {
		return (
			<div className="Admin">
				<Navigation />
				<Transactions />
			</div>
		);
	}
}

export default index;
