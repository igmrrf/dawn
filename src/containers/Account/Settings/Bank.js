import React, { Component } from "react";
import { Container, Row, Col, Card, Form, Spinner } from "react-bootstrap";
import API from "../../../helpers/API";

export class Bank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            bank_code: "",
            bank_name: "",
            acc_type: "",
            acc_number: 0,
            acc_name: "",
            errorMessage: "",
        };

        this.onUpdateSubmit = this.onUpdateSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        API.get("bank?token=" + localStorage.getItem("token"))
            .then((res) => {
                const data = res.data;
                console.log(data);
                if (data.success === true) {
                    this.setState({
                        bank_name: data.message[0].bank_name,
                        bank_code: data.message[0].bank_code,
                        acc_type: data.message[0].acc_type,
                        acc_number: data.message[0].acc_number,
                        acc_name: data.message[0].acc_name,
                    });
                } else if (data.success === false) {
                    this.setState({ errorMessage: data.message });
                }
            })
            .catch((err) => {
                this.setState({
                    errorMessage: "There has been a server error",
                });
            });
    }

    onUpdateSubmit = () => {
        this.setState({ isLoading: true });
        API.post("bank?token=" + window.localStorage.getItem("token"), {
            bank_name: this.state.bank_name,
            bank_code: this.state.bank_code,
            acc_type: this.state.acc_type,
            acc_number: this.state.acc_number,
            email: this.state.email,
            acc_name: this.state.acc_name,
        })
            .then((res) => {
                const data = res.data;
                console.log(data);
                if (data.success === true) {
                    this.setState({ isLoading: false });
                    this.setState({ errorMessage: data.message });
                } else {
                    this.setState({ errorMessage: data.message });
                    this.setState({ isLoading: false });
                }
            })
            .catch((err) => {
                this.setState({
                    errorMessage: "There has been a server error",
                });
            });
    };
    render() {
        const {
            errorMessage,
            bank_code,
            bank_name,
            acc_type,
            acc_number,
            isLoading,
            acc_name,
        } = this.state;
        return (
            <div className="profile-settings">
                <Container>
                    <Row className="first-card-row">
                        <Col>
                            <Card className="account-cards">
                                <Card.Body>
                                    <Card.Title className="mb-2 text-muted">
                                        Bank Details
                                    </Card.Title>

                                    <Card.Text>
                                        Update Required Fields
                                    </Card.Text>

                                    <Form>
                                        {errorMessage && (
                                            <span className="text-danger">
                                                {errorMessage}
                                            </span>
                                        )}

                                        <Form.Group className="pb-2">
                                            <Form.Label
                                                className="font-weight-bold"
                                                htmlFor="bank_name"
                                            >
                                                <span>
                                                    <i className="fas fa-university text-info"></i>
                                                </span>{" "}
                                                Bank Name:{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="bank_name"
                                                value={bank_name}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="pb-2">
                                            <Form.Label
                                                className="font-weight-bold"
                                                htmlFor="bank_code"
                                            >
                                                <span>
                                                    <i className="fas fa-university text-info"></i>
                                                </span>{" "}
                                                Bank Code:{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="bank_code"
                                                value={bank_code}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="pb-2">
                                            <Form.Label
                                                className="font-weight-bold"
                                                htmlFor="acc_name"
                                            >
                                                <span>
                                                    <i className="fas fa-university text-info"></i>
                                                </span>{" "}
                                                Account Name:{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="acc_name"
                                                value={acc_name}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group className="pb-2">
                                            <Form.Label
                                                className="font-weight-bold"
                                                htmlFor="acc_type"
                                            >
                                                <span>
                                                    <i className="fas fa-id-card text-info"></i>
                                                </span>{" "}
                                                Account Type:{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="acc_type"
                                                value={acc_type}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="pb-2">
                                            <Form.Label
                                                className="font-weight-bold"
                                                htmlFor="acc_number"
                                            >
                                                <span>
                                                    <i className="fas fa-file-invoice-dollar text-info"></i>
                                                </span>{" "}
                                                Account Number:{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="acc_number"
                                                value={acc_number}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                    </Form>

                                    <button></button>
                                    <button
                                        className="btn btn-info btn-block"
                                        type="submit"
                                        disabled={isLoading}
                                        name="submit"
                                        onClick={this.onUpdateSubmit}
                                    >
                                        {isLoading && (
                                            <div>
                                                <Spinner
                                                    animation="border"
                                                    role="status"
                                                    style={{
                                                        height: "20px",
                                                        width: "20px",
                                                    }}
                                                ></Spinner>{" "}
                                                <li className="fab fa-btc "></li>{" "}
                                                Submit
                                            </div>
                                        )}
                                        {!isLoading && (
                                            <div>
                                                <li className="fab fa-btc "></li>{" "}
                                                Submit
                                            </div>
                                        )}
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Bank;
