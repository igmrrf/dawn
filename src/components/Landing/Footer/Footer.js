import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="copyright">
            © Dash Trade (2016 - 2020) - All Rights Reserved
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
