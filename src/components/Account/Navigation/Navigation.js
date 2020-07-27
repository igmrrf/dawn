import React, { Component } from "react";
import Header from "./Header/Header";
import TopBar from "./TopBar/TopBAr";
import API from "../../../helpers/API";

export class Navigation extends Component {
	state = {
		last_name: "",
		errMessage: ""
	};
	componentDidMount() {
		API.get("verify?token=" + window.localStorage.getItem("token"))
			.then(res => {
				const data = res.data;
				if (data.success === false) {
					window.location.href = "/";
				} else {
					this.setState({ last_name: data.last_name });
				}
			})
			.catch(err => {
				this.setState({ errMessage: err });
			});
	}
	render() {
		return (
			<div className="navigation">
				<Header user_last_name={this.state.last_name} />
				<TopBar />
			</div>
		);
	}
}

export default Navigation;
