import React from "react";

export default function Statistic(props) {
  return (
    <div className="col-xl-3 col-lg-3 col-sm-8 col-md-6" data-aos="fade-right">
      <div className="single-statics">
        <div className="after-before">
          <div className="part-img">{props.src}</div>
          <div className="part-text">
            <span className="number">{props.amount}</span>
            <span className="title">{props.tag}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
