import React, { Component } from "react";
import RegisterImg from "../../../assets/Landing/img/2.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Header from "../Sections/Header";
import API from "../../../helpers/API";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: "",
            password: "",
            confirmPassword: "",
            samePassword: true,
            first_name: "",
            last_name: "",
            errorMessage: "",
            passwordType: "password",
            confirmType: "password",
            referrerCode: "",
        };
        this.onConfirmPassword = this.onConfirmPassword.bind(this);
        this.showPassword = this.showPassword.bind(this);
        this.onRegister = this.onRegister.bind(this);

        this.onChange = this.onChange.bind(this);
    }

    showPassword = (event) => {
        if ([event.target.type] === "password") {
            this.setState({ [event.target.name]: "text" });
        } else {
            this.setState({ [event.target.name]: "password" });
        }
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onConfirmPassword = (event) => {
        if (event.target.value === this.state.password) {
            this.setState({ samePassword: true });
        } else {
            this.setState({ samePassword: false });
        }
        this.setState({ confirmPassword: event.target.value });
    };
    onRouteChange = (event) => {
        window.location.href = "/login";
    };
    componentDidMount() {
        if (this.props.prop) {
            this.setState({
                referrerCode: this.props.prop,
            });
            console.log("Done");
        } else {
            console.log("NO referrer");
        }
    }
    onRegister = () => {
        this.setState({ isLoading: true });

        const userData = {
            email: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            referrerCode: this.state.referrerCode,
        };
        API.post("register/", { userData })
            .then((res) => {
                const data = res.data;
                if (data.success === true) {
                    this.onRouteChange();
                } else {
                    this.setState({ errorMessage: data.message });
                    this.setState({ isLoading: false });
                }
            })
            .catch((err) => {
                this.setState({ isLoading: false });
                this.setState({
                    errorMessage: "Your registration process failed",
                });
            });
    };

    render() {
        let { isLoading, errorMessage, confirmType, passwordType } = this.state;
        return (
            <div className="register">
                <Container>
                    <Header
                        paragraph="sign up a free account and join thousands of investors
									community members"
                        heading="Register"
                    />

                    <Row>
                        <Col md={6}>
                            <Card className="register-card" data-aos="fade-up">
                                <Card.Body>
                                    <Form>
                                        <Form.Group className="pb-1">
                                            <Form.Label
                                                className="font-weight-bold"
                                                htmlFor="first_name"
                                            >
                                                <span>
                                                    <i className="fas fa-id-card text-info"></i>
                                                </span>{" "}
                                                Enter First Name:{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                id="first_name"
                                                type="text"
                                                name="first_name"
                                                placeholder="First Name"
                                                onChange={this.onChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="pb-1">
                                            <Form.Label
                                                className="font-weight-bold"
                                                htmlFor="last_name"
                                            >
                                                <span>
                                                    <i className="fas fa-id-card text-info"></i>
                                                </span>{" "}
                                                Enter Last Name:{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                id="last_name"
                                                name="last_name"
                                                type="text"
                                                placeholder="Last Name"
                                                onChange={this.onChange}
                                            />
                                        </Form.Group>

                                        <Form.Group className="pb-1">
                                            <Form.Label
                                                className="font-weight-bold"
                                                htmlFor="reg-email"
                                            >
                                                <span>
                                                    <i className="fas fa-envelope text-info"></i>
                                                </span>{" "}
                                                Enter E-mail:{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                id="reg-email"
                                                name="email"
                                                type="text"
                                                placeholder="E-mail"
                                                onChange={this.onChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="pb-1">
                                            <Form.Label
                                                className="font-weight-bold"
                                                htmlFor="secret-key"
                                            >
                                                <span>
                                                    <i className="fas fa-lock text-info"></i>
                                                </span>{" "}
                                                Enter Secret Key:{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>{" "}
                                                <span>
                                                    <div
                                                        style={{
                                                            display: "inline",
                                                            border: "none",
                                                            background:
                                                                "transparent",
                                                        }}
                                                        onClick={
                                                            this.showPassword
                                                        }
                                                    >
                                                        <i className="fas fa-eye"></i>
                                                    </div>
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                id="secret-key"
                                                name="password"
                                                type={passwordType}
                                                placeholder="Secret Key"
                                                onChange={this.onChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="pb-1">
                                            <Form.Label
                                                className="font-weight-bold"
                                                htmlFor="confirm-secret-key"
                                            >
                                                <span>
                                                    <i className="fas fa-lock text-info"></i>
                                                </span>{" "}
                                                Confirm Secret Key:{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>{" "}
                                                <span>
                                                    <div
                                                        style={{
                                                            display: "inline",
                                                            border: "none",
                                                            background:
                                                                "transparent",
                                                        }}
                                                        onClick={
                                                            this
                                                                .showPasswordConfirm
                                                        }
                                                    >
                                                        <i className="fas fa-eye"></i>
                                                    </div>
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                id="confirm-secret-key"
                                                name="confirmType"
                                                type={confirmType}
                                                placeholder="Confirm Secret Key"
                                                onChange={
                                                    this.onConfirmPassword
                                                }
                                            />

                                            {!this.state.samePassword && (
                                                <span className="text-danger font-weight-bold my-2">
                                                    Password Don't Match
                                                </span>
                                            )}
                                        </Form.Group>
                                        <Col md={12}>
                                            <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input
                                                    className="custom-control-input"
                                                    id="customCheckRegister"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customCheckRegister"
                                                >
                                                    <span className="text-muted font-weight-bolder">
                                                        I agree with the{" "}
                                                        <Link to="/privacy">
                                                            <span className="text-success">
                                                                Privacy Policy
                                                            </span>
                                                        </Link>
                                                    </span>
                                                </label>
                                            </div>
                                        </Col>
                                    </Form>
                                    <div className="error text-danger">
                                        <p>{errorMessage}</p>
                                    </div>

                                    <div className="d-flex justify-content-center align-content-center">
                                        <button
                                            disabled={isLoading}
                                            onClick={this.onRegister}
                                            className="brownBtn"
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
                                                    Register
                                                </div>
                                            )}
                                            {!isLoading && (
                                                <span>Register</span>
                                            )}
                                        </button>
                                        <Link
                                            to="/login"
                                            className="haveAccount"
                                        >
                                            or Have an account?
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <div
                                className="register-img-card"
                                data-aos="fade-down"
                            >
                                <img
                                    src={RegisterImg}
                                    className="register-img"
                                    alt="register"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;
