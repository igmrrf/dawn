import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Crypto from "../../Landing/Widgets/CryptoUpdate";
import Index from "../../Landing/Widgets/Sell";
import Crypt from "../../Landing/Widgets/Crypt";
import Wallet from "../Wallet";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Container>
          <Row>
            <Col md={4}>
              <Crypto />
            </Col>
            <Col md={4}>
              <Index />
            </Col>
            <Col md={4}>
              <Crypt />
            </Col>
          </Row>
          <Wallet />
        </Container>
      </div>
    );
  }
}
