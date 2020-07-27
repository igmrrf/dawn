import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Security from "./SecuritySettings";
import Wallet from "./WalletSettings";
import Bank from "./Bank";
import Navigation from "../../../components/Account/Navigation/Navigation";
import Footer from "../../../components/Account/Navigation/Footer";
import Profile from "./ProfileSettings";
export class SettingsPage extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Tabs
					className="d-flex justify-content-center p-2"
					defaultActiveKey="wallet"
					id="uncontrolled-tab-example"
					style={{ background: "#1d1d52", fontSize: "20px" }}
				>
					<Tab eventKey="wallet" title="Wallet">
						<Wallet />
					</Tab>
					<Tab eventKey="bank" title="Bank">
						<Bank />
					</Tab>
					<Tab eventKey="security" title="Security">
						<Security />
					</Tab>
					<Tab eventKey="Profile" title="Profile">
						<Profile />
					</Tab>
				</Tabs>
				<Footer />
			</div>
		);
	}
}

export default SettingsPage;
