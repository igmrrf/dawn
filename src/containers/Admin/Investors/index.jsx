import Investors from "../../../components/Admin/Investors";

import React, { Component } from "react";
import Navigation from "../../../components/Admin/Navigation";


export class index extends Component {
	render() {
		return (
			<div className="Admin">
				<Navigation />
				<Investors />
			</div>
		);
	}
}

export default index;
