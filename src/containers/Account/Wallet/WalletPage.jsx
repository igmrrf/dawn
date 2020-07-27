import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navigation from "../../../components/Account/Navigation/Navigation";
import Footer from "../../../components/Account/Navigation/Footer";
import Chart from "../../../components/Landing/Widgets/CryptoUpdate";
import API from "../../../helpers/API";

export class WalletPage extends Component {
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            plan: "",
            wallet: "",
            balance: 0,
            currency: "",
            refer: "",
        };
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

        API.get("profile?token=" + window.localStorage.getItem("token"))
            .then((res) => {
                const data = res.data;
                console.log(data._id);
                if (data.success === false) {
                    setTimeout(() => {
                        window.location = "/";
                    }, 1000);
                } else {
                    this.setState({
                        wallet: data.wallet,
                        refer: data._id,
                        last_name: data.last_name,
                        plan: data.plan,
                        balance: data.balance,
                        total_deposit: data.total.deposit,
                    });
                }
            })
            .catch((err) => {
                this.setState({
                    errorMessage: "Your registration process failed",
                });
            });
    }
    onUpdate() {
        fetch();
    }
    render() {
        const { wallet, balance, plan, currency, refer } = this.state;
        return (
            <div className="wallet">
                <Navigation />
                <Container>
                    <Row>
                        <Col md={6}>
                            <Card style={{ marginTop: "30px" }}>
                                <Card.Body>
                                    <Card.Title style={{}}>
                                        <span>
                                            <i className="fas fa-wallet text-danger"></i>
                                        </span>
                                        Wallet
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2">
                                        <span className="mr-auto">
                                            Dash Balance{" "}
                                        </span>
                                    </Card.Subtitle>

                                    <Card.Text>Available Balance:</Card.Text>

                                    <h1 style={{ color: "green" }}>
                                        {currency}
                                        {balance}
                                    </h1>
                                    <Card.Text className="text-muted">
                                        Current Plan : {plan}
                                        <br />
                                        Book Balance :{currency}
                                        {balance}
                                    </Card.Text>
                                    <Card.Text className="mb-2 ">
                                        <span className="mr-auto">
                                            Wallet Address: {wallet}
                                        </span>
                                    </Card.Text>
                                    <span>
                                        <a href="/account/deposit">
                                            <button
                                                className="btn btn-primary btn-block"
                                                type="submit"
                                                name="submit"
                                                href="/account/deposit"
                                            >
                                                <li className="fab fa-btc "></li>{" "}
                                                Deposit
                                            </button>
                                        </a>
                                    </span>
                                    <br />
                                    <span>
                                        <a href="/account/withdrawal">
                                            <button
                                                className="btn btn-danger btn-block"
                                                type="submit"
                                                name="submit"
                                            >
                                                <li className="fab fa-btc "></li>
                                                Withdraw
                                            </button>
                                        </a>
                                    </span>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Row>
                                <Col md={8}>
                                    <Chart />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Card className="account-cards">
                                        <Card.Body>
                                            <Card.Title className="mb-2 text-center font-weight-bolder text-monospace  ">
                                                Your Referral Link:
                                            </Card.Title>
                                            <Card.Subtitle className="text-secondary">
                                                www.dashtrade.online/register/
                                                {refer}
                                            </Card.Subtitle>
                                            <br />
                                            <h6 className="text-center text-danger">
                                                copy and share to earn referral
                                                bonuses
                                            </h6>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default WalletPage;
