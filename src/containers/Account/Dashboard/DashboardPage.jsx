import React, { Component } from "react";
import Navigation from "../../../components/Account/Navigation/Navigation";
import "../../../assets/Account/css/style.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../../components/Account/Navigation/Footer";
import Form from "react-bootstrap/Form";
import Crypto from "../../../components/Landing/Widgets/CryptoUpdate";
import Index from "../../../components/Landing/Widgets/Sell";
import API from "../../../helpers/API";
import Referrals from "./Referrals";
const NavLink = require("react-router-dom").NavLink;

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      plan: "",
      wallet: "",
      balance: 0,
      currency: "",
      total_deposit: 0,
    };
  }

  UNSAFE_componentWillMount() {
    API.get("verify?token=" + window.localStorage.getItem("token"))
      .then((res) => {
        const data = res.data;
        if (data.success === false) {
          setTimeout(() => {
            window.location = "/";
          }, 1000);
        } else {
          this.setState({ last_name: data.last_name });
          this.setState({ first_name: data.first_name });
          this.setState({ total_deposit: data.total.deposit });
          this.setState({ balance: data.balance });
          this.setState({ plan: data.plan });
          this.setState({ wallet: data.wallet });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    const date = new Date();

    const main = String(date);
    const gmt = main.split(" ");
    const GMTZone = gmt[5];
    const mainer = GMTZone.substr(3);
    const addOrMinus = GMTZone.substr(3, 1);

    const NumberGMT = Number(mainer);
    console.log(addOrMinus, NumberGMT);
    if (mainer < 400 && mainer > 100) {
      this.setState({ currency: "R" });
    } else {
      this.setState({ currency: "$" });
    }
  }

  render() {
    const {
      last_name,
      first_name,
      balance,
      currency,
      plan,
      wallet,
      total_deposit,
    } = this.state;
    return (
      <div className="dashboard">
        <Navigation />
        <div className="welcome-text text-center py-5">
          <Container>
            <h2>
              Welcome {first_name} {last_name}!{" "}
            </h2>
          </Container>
        </div>
        <Container>
          <Row className="first-card-row">
            <Col md={4}>
              <Card className="account-cards">
                <Card.Body className="text-center">
                  <Card.Title className="mb-2 ">Wallet</Card.Title>

                  <Card.Text>
                    Available Balance:{" "}
                    <h1>
                      {currency}
                      {balance}
                    </h1>
                  </Card.Text>

                  <Card.Text className="text-muted">
                    Current Plan : {plan}
                    <br />
                    Book Balance : {currency}
                    {balance}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="account-cards">
                <Card.Body className="text-center  transaction-card">
                  <Card.Title>Deposit</Card.Title>
                  <h1 style={{ color: "#09203f" }}>
                    {currency}
                    {total_deposit}
                  </h1>
                  <Card.Text className="text-muted">
                    Current Plan : {plan}
                    <br />
                    Book Balance : {currency}
                    {balance}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Crypto />
            </Col>
          </Row>
          <Row className="second-card-row">
            <Col md={4}>
              <Card className="account-cards">
                <Card.Body className="text-center">
                  <Card.Title className="mb-2 ">Deposit</Card.Title>

                  <Card.Text>Make a Deposit</Card.Text>
                  <Form>
                    <Form.Group>
                      <Form.Label>Select Plan</Form.Label>
                      <Form.Control as="select">
                        {currency === "R" ? (
                          <>
                            <option value="Basic">
                              BASIC PLANS-14days(R1000 - R10,000)
                            </option>
                            <option value="Silver">
                              SILVER PLAN-10days(R10,000 - R50,000)
                            </option>
                            <option value="Gold">
                              GOLD PLAN-6days(R50,000 - R250,000)
                            </option>
                            <option value="Diamond">
                              DIAMOND PLAN-3days(R250,000 - R1,000,000)
                            </option>
                          </>
                        ) : (
                          <>
                            <option value="Basic">
                              BASIC PLANS-14days($100 - $1,000)
                            </option>
                            <option value="Silver">
                              SILVER PLAN-10days($1,000 - $5,000)
                            </option>
                            <option value="Gold">
                              GOLD PLAN-6days($5,000 - $10,000)
                            </option>
                            <option value="Diamond">
                              DIAMOND PLAN-3days($10,000 - $1,000,000)
                            </option>
                          </>
                        )}
                      </Form.Control>
                    </Form.Group>
                    <span>
                      <NavLink to="/account/deposit">
                        <button className="btn btn-primary btn-block">
                          <li className="fab fa-btc "></li> Deposit
                        </button>
                      </NavLink>
                    </span>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="account-cards">
                <Card.Body className="text-center">
                  <Card.Title className="mb-2 ">Withdraw</Card.Title>

                  <Card.Text>Process a Withdrawal</Card.Text>
                  <Form>
                    <Form.Group>
                      <Form.Label>Select Wallet</Form.Label>
                      <Form.Control as="select">
                        <option value="1">Select Wallet or Add if none</option>
                        {this.state.wallet && (
                          <option value="2">{wallet}</option>
                        )}
                      </Form.Control>
                    </Form.Group>

                    <span>
                      <NavLink to="/account/withdrawal">
                        <button className="btn btn-danger btn-block">
                          <li className="fab fa-btc "></li> Withdraw
                        </button>
                      </NavLink>
                    </span>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Index />
            </Col>
          </Row>
          <Referrals />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
