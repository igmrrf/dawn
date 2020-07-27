import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Header(props) {
  return (
    <Row>
      <Col md={8} lg={6} data-aos-duration="2000" data-aos="fade-out">
        <div className="section-title">
          <h1>{props.heading}</h1>
          <h4>{props.paragraph}</h4>
        </div>
      </Col>
    </Row>
  );
}
