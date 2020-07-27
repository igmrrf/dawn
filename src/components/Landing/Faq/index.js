import React, { Component } from "react";
import { Accordion, Card, Container, Col, Row } from "react-bootstrap";

export class Trading extends Component {
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
									How to trade on demo account?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										To receive demo account access you need to fund your trading
										account and contact customer support to get an demo account
										credentials.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="1"
									className="bg-info"
								>
									How to trade Premium options?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
										To trade Premium options, simply fund your account and login
										into the platform. You will see binary options trading by
										default. To start trading, choose CALL or PUT options
										depending on your forecast.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="2"
									className="bg-info"
								>
									How to trade CFD?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
										To start trading CFD, fund your account and login into the
										platform. On the top you'll be able to choose CFD trading
										tab and start trading CFD. You can choose BUY or SELL
										options, depending on your market forecasts. It’s not
										permitted to trade CFD, if total account loss is exceeding
										total amount of deposits on the account. When trading CFD,
										if balance drops to the level of bonus, an automatic closing
										of all open trades takes place - Margin call. Example: You
										deposited $1000 and got bonus of $1000. If the loss in your
										account equals to $1000, bonus is automatically withdrawn
										and open trades are closed
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="3"
									className="bg-info"
								>
									What are the conditions for a bonus in CFD trading?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>
										Bonuses are eligible on all CFD trades and are awarded by
										IQoption Investment up to 100%, based on your deposited
										amount. Bonuses are meant to give a trader an additional
										margin for maintaining positions and/or to open larger
										volume positions. With this statement client should
										understand, that Profit and Loss (PnL) always relates to
										client's Net balance, not Bonus amount. Bonuses awarded by
										IQoption Investment are not withdrawable or tradable
										separately.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="4"
									className="bg-info"
								>
									What time base is used by the platform?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
										The time is displayed based on Greenwich Time (GMT)
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="5"
									className="bg-info"
								>
									Payouts for assets
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="5">
									<Card.Body>
										You can find payouts for different trading assets in the
										trading platform, on the right left side. For example, you
										will see: EURUSD - 85%. That means if you will open trade
										with $100 investment, then in case of win you will receive
										$185 payout - $100 investment return and $85 of profit.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="6"
									className="bg-info"
								>
									Copy trading - follow successful traders
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="6">
									<Card.Body>
										Copy trading service designed for novices and people who
										want to trade automatically without manual trades. To get
										started, you need to fund your account and on the trading
										platform press Copy trading, then choose trader to copy
										from.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="7"
									className="bg-info"
								>
									What is Margin Call?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="7">
									<Card.Body>
										Margin call is account state when all your open trades will
										be automatically closed. Margin call is triggered by 5%
										margin level (5% from free funds + opened positions margin).
										For instance, you have $1000 on your balance and you open
										several positions. In case your total floating profit/loss
										will reach -$950 (5% from free funds + opened positions
										margin), you margin call will be triggered.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="8"
									className="bg-info"
								>
									What is Double Up?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="8">
									<Card.Body>
										You can double up your investment on chosen option. When you
										double up trade, you will get duplicate position - asset,
										direction, amount and expiry time will be the same, but open
										price will differ. New positions will be opened by current
										market price.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="9"
									className="bg-info"
								>
									What is Rollover?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="9">
									<Card.Body>
										You can move option expiry time on next period (to current
										expiry time will be added one period). Following conditions
										should be complied: 1. Opened position should be out of the
										money (not in profit). 2. Using rollover your investment
										amount will be increased on 30%. You need to have enough
										funds on balance. 3. Till option expiry time remaining >1/4
										from chosen period.
									</Card.Body>
								</Accordion.Collapse>

								<Accordion.Toggle
									as={Card.Header}
									eventKey="10"
									className="bg-info"
								>
									What is Sell Out?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="10">
									<Card.Body>
										You can close opened position before its expiry time if the
										position is in profit on 0.1% or more. After position is
										closed, investment will be returned back to your balance.
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

export default Trading;
