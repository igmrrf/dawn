import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

export class Footer extends Component {
	render() {
		return (
			<div className="account-footer">
				<Container>
					<Row>
						<Col md={6}>
							<Nav
								activeKey="/home"
								onSelect={selectedKey => alert(`selected ${selectedKey}`)}
							>
								<Nav.Item>
									<Nav.Link href="/about" className="text-muted">
										About Us
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link
										href="/our-plans"
										eventKey="our plans"
										className="text-muted"
									>
										Our Plans
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link
										href="/faq"
										eventKey="frequently asked questions"
										className="text-muted"
									>
										FAQ
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link
										href="/contact"
										eventKey="To view Contact Us Page"
										className="text-muted"
									>
										Contact Us
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col md={3}></Col>

						<Col md={3}>
							<Nav>
								<Nav.Item>
									<Nav.Link className="text-muted">
										© 2020 BitVest Investment
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Footer;
