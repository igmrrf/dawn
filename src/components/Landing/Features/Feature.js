import React from "react";

export default function Feature(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-sm-8 col-md-6">
      <div
        className="single-feature"
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
