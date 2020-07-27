import React, { Component } from "react";
import { Accordion, Card, Container, Row, Col } from "react-bootstrap";

export class HowToBegin extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Accordion defaultActiveKey="0">
							<Card className="accordion-card">
								<Accordion.Toggle
									as={Card.Header}
									eventKey="0"
									className="bg-info"
								>
									What is CFD?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										CFD - Contract for Difference. CFD is type of financial
										asset which helps trader to gain and earn in a continuous
										way. By predicting the move of a currency, trader can choose
										to open BUY or SELL contract for any asset.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="1"
									className="bg-info"
								>
									What is binary option?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
										Premium options are a simple and potentially very profitable
										way to make money from short term movements on the market.
										By correctly predicting whether the price of an asset will
										go up or down, you can get a significant income in a
										continuous way.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="2"
									className="bg-info"
								>
									What is cryptocurrency?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
										Cryptocurrency is a digital currency, which functioning is
										based on blockchain techology. Physically currency doesn't
										exist, it exist only in virtuality. The most popular
										cryptocurrencies are Bitcoin, Ethereum, Litecoin, Dash,
										Ripple. You can use these currencies to fund and trade.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="3"
									className="bg-info"
								>
									What is the minimum and maximum deposit amount?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>
										The minimum deposit amount is 250$ (or €), and the maximum -
										50000$ (or €).
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="4"
									className="bg-info"
								>
									Do I have to download any software for trading?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
										There is no need to download something before you can start
										trading with Premium options. All you need to do is sign up
										and add funds into your account and you’ll be ready to start
										trading.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="5"
									className="bg-info"
								>
									Is there any maintenance or registration fee?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="5">
									<Card.Body>
										No, it is free to open an account with Premium options.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="6"
									className="bg-info"
								>
									How can I sign up?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="6">
									<Card.Body>
										To sign up go to ‘Open an Account’ and enter the required
										information. Please make sure the data you submit is correct
										and up to date. In the future it will simplify withdrawal
										process.
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default HowToBegin;
