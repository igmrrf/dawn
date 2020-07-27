import React from "react";

import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col>
            <Navbar expand="lg" variant="light">
              <Navbar.Brand href="/" className="logo">
                <h2 className="font-weight-bold">DashTrade</h2>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Nav.Link className="nav-link" href="/">
                      Home
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className="nav-link" href="/about_us">
                      About Us
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className="nav-link" href="/markets">
                      Markets
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className="nav-link" href="/contact_us">
                      Contact Us
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link href="/sign_in" className="nav-link">
                      Sign In
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link href="/sign_up" className="nav-link">
                      Sign Up
                    </Nav.Link>
                  </li>
                </ul>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Header;
