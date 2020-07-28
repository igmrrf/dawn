import React, { Component } from "react";
import Luno from "../../../assets/Landing/img/partners/luno.png";
import CoinBase from "../../../assets/Landing/img/partners/coinbase.png";
import VisaMaster from "../../../assets/Landing/img/partners/cards.png";
import Changelly from "../../../assets/Landing/img/partners/changelly.png";
import Header from "../Sections/Header";

export default class Index extends Component {
  render() {
    return (
      <div className="partners">
        <div className="container-fluid">
          <Header heading="Partners" />
          <div className="row justify-content-xl-start justify-content-lg-start justify-content-sm-center">
            <div className="col">
              <img src={Luno} alt="" className="partner-image" />
              <img src={CoinBase} alt="" className="partner-image" />
              <img src={VisaMaster} alt="" className="partner-image" />
              <img src={Changelly} alt="" className="partner-image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
