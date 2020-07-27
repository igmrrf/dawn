import React, { Component } from "react";
import { Accordion, Card, Row, Col, Container } from "react-bootstrap";

export class MyAccount extends Component {
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
									How can I fund my trading account?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										You can fund your account by credit cards (VISA/MasterCard),
										Bank wire transfer, Bitcoin, Ethereum, Litecoin, Altcoins,
										Neteller, Skrill, Perfect Money.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="1"
									className="bg-info"
								>
									How quickly the funds will be added to my trading account?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
										The funds will be available for trading immediately, once we
										receive a confirmation from payment system.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="2"
									className="bg-info"
								>
									What are the conditions for withdrawals?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
										For security reasons, identification of the person is
										required for all withdrawals, regardless of the withdrawal
										amount. For account without bonus: trader has to reach a
										100% turnover from deposited amount, to claim for for
										withdrawal. For account with bonus: trader has to reach 300%
										turnover from deposited amount, to claim for deposited
										amount and profit withdrawal. More details in "User
										agreement". The minimal amount allowed for withdrawal is
										$500.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="3"
									className="bg-info"
								>
									How quickly my withdrawal request is processed?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>
										Premium options processes all withdrawal requests within 1
										hour. However verification may take longer time, if client
										didn't submit all requested documents in time.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="4"
									className="bg-info"
								>
									Does Premium options withhold a tax from payouts?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
										Premium options doesn't withhold any taxes. However, as a
										customer, it is your responsibility to follow the taxes
										requirements in your jurisdiction.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="5"
									className="bg-info"
								>
									How can I close my Premium options account?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="5">
									<Card.Body>
										Please email at support@premiumoptions.online to request
										closing of your account. You will receive a confirmation
										when this request will be completed.
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

export default MyAccount;
