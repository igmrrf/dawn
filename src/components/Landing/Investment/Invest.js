import React from "react";

export default function Invest(props) {
  return (
    <div className="col-xl-3 col-lg-3 col-sm-8 col-md-6">
      <div
        className="single-plan"
        data-aos={props.effect}
        data-aos-duration="2000"
      >
        <h3>{props.plan}</h3>
        <div className="part-price">
          <span className="percent">{props.percent}</span>
        </div>
        <div className="part-feature">
          <p>Minimum of {props.range}</p>
          <p>No Deposit Fees</p>
          <p>Profit up to $5,0000</p>
          <p>Personal Acount Manager</p>
          <p>Trade Calendar </p>
        </div>
        <div className="glowBtn">
          <a href="/sign_up">Invest</a>
        </div>
      </div>
    </div>
  );
}
