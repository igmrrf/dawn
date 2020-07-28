import React, { Component } from "react";

import Forex from "../../../components/Landing/Widgets/Forex";
import Trade from "../../../components/Landing/Widgets/Trade";
import Crypt from "../../../components/Landing/Widgets/Crypt";
import SlidePrice from "../../../components/Landing/Widgets/SlidePrice";
import Footer from "../../../components/Landing/Footer";
import Title from "../../../components/Landing/Sections/Header";
import Header from "../../../components/Landing/Header";
import { Container, Row, Col } from "react-bootstrap";
export default class FAQ extends Component {
  render() {
    return (
      <div>
        <Header />
        <SlidePrice />
        <Container>
          <Title
            heading="Markets"
            paragraph="Access variaties of market stocks"
          />
          <Trade />
          <Row>
            <Forex />
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
