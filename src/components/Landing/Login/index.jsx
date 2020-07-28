import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Link from "react-router-dom/Link";
import Spinner from "react-bootstrap/Spinner";
import Header from "../Sections/Header";
import API from "../../../helpers/API";

class Index extends Component {
  constructor(props) {
    super(props);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.onRouteChange = this.onRouteChange.bind(this);
    this.onAdminRoute = this.onAdminRoute.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.state = {
      isLoading: false,
      email: "",
      password: "",
      errorMessage: "",
      loginType: "password"
    };
  }
  showPassword = () => {
    if (this.state.loginType === "password") {
      this.setState({ loginType: "text" });
    } else {
      this.setState({ loginType: "password" });
    }
  };

  onRouteChange = () => {
    window.location = "/account/dashboard";
  };
  onAdminRoute = () => {
    window.location.href = "/asghdjklajsj";
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ isLoading: true });

    API.post("login/", {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        const data = res.data;

        if (data.admin === true) {
          window.localStorage.setItem("token", data.token);
          this.onAdminRoute();
        } else if (data.success === true) {
          window.localStorage.setItem("token", data.token);
          this.onRouteChange();
        } else {
          this.setState({ isLoading: false });
          this.setState({ errorMessage: data.message });
        }
      })
      .catch(err => {
        this.setState({ isLoading: false });
        this.setState({
          errorMessage: "There was an error reaching out to the server"
        });
      });
  };
  render() {
    const { isLoading, loginType } = this.state;
    return (
      <div className="login">
        <Container>
          <Header heading="Login" paragraph="Enter your account details" />
          <Row className="center">
            <Col md={6}>
              <Card data-aos="fade-right">
                <Card.Body>
                  <Form>
                    <Form.Group className="pb-2">
                      <Form.Label className="font-weight-bold" htmlFor="email">
                        <span>
                          <i className="fas fa-envelope text-info"></i>
                        </span>{" "}
                        Enter E-mail: <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        id="email"
                        type="text"
                        placeholder="Enter Your E-mail"
                        name="email"
                        onChange={this.onEmailChange}
                      />
                    </Form.Group>
                    <Form.Group className="pb-2">
                      <Form.Label
                        className="font-weight-bold"
                        htmlFor="password"
                      >
                        <span>
                          <i className="fas fa-key text-info"></i>
                        </span>{" "}
                        Enter Secret Key:{" "}
                        <span className="text-danger"> *</span>{" "}
                        <span>
                          <div
                            style={{
                              display: "inline",
                              border: "none",
                              background: "transparent"
                            }}
                            onClick={this.showPassword}
                          >
                            <i className="fas fa-eye"></i>
                          </div>
                        </span>
                      </Form.Label>
                      <Form.Control
                        id="password"
                        type={loginType}
                        placeholder="Enter Your Key"
                        name="password"
                        onChange={this.onPasswordChange}
                      />
                    </Form.Group>
                    <div className="text-danger font-weight-bold">
                      <p>{this.state.errorMessage}</p>
                    </div>
                  </Form>
                  <div className="d-flex justify-content-center align-content-center">
                    <button disabled={isLoading} onClick={this.onButtonSubmit}>
                      {isLoading && (
                        <div>
                          <Spinner
                            animation="border"
                            role="status"
                            style={{ height: "20px", width: "20px" }}
                          ></Spinner>{" "}
                          Login
                        </div>
                      )}
                      {!isLoading && <span>Login</span>}
                    </button>

                    <Link to="/register" className="haveAccount">
                      or Create account?
                    </Link>
                  </div>
                </Card.Body>
                <Link to="/recover" className="haveAccount">
                  Forgot Password?
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Index;
