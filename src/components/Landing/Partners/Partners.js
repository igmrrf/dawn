import React, { Component } from "react";
import CoinMama from "../../../assets/Landing/img/e.png";
import Luno from "../../../assets/Landing/img/f.png";
import CoinBase from "../../../assets/Landing/img/d.png";
import VisaMaster from "../../../assets/Landing/img/g.png";
import Changelly from "../../../assets/Landing/img/b.png";
import Header from "../Sections/Header";

export default class Partners extends Component {
	render() {
		return (
			<div className="partners">
				<div className="container-fluid">
					<Header heading="Partners" />
					<div className="row justify-content-xl-start justify-content-lg-start justify-content-sm-center">
						<div className="col">
							<center>
								<img src={CoinMama} alt="" className="partner-image" />
								<img src={Luno} alt="" className="partner-image" />
								<img src={CoinBase} alt="" className="partner-image" />
								<img src={VisaMaster} alt="" className="partner-image" />
								<img src={Changelly} alt="" className="partner-image" />
							</center>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
