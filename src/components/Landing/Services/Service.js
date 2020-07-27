import React from "react";

export default function Service(props) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
      <div
        className="single-service"
        data-aos={props.effect}
        data-aos-duration="2000"
      >
        <div className="part-icon">{props.src}</div>
        <div className="part-text">
          <h3>{props.heading}</h3>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </div>
  );
}
