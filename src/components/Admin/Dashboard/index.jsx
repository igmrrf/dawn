import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Wallet from "../Wallet";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Container>
          <Wallet />
        </Container>
      </div>
    );
  }
}
