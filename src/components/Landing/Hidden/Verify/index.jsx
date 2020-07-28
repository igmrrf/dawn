import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Header from "../../Sections/Header";
import { Form } from "react-bootstrap";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      verified: false,
      message: "",
      errMessage: "",
    };
    this.onSubmitVerification = this.onSubmitVerification.bind(this);
  }

  onTokenInput = (event) => {
    this.setState({ token: event.target.value });
  };
  onSubmitVerification() {
    const { token } = this.state;
    fetch("https://pure-peak-96458.herokuapp.com/verifyEmail?token=" + token, {
      method: "post",
      header: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          this.setState({ errMessage: data.message });
        } else if (data.success === true) {
          this.setState({ verified: true });
          this.setState({ message: data.message });
        }
      })
      .catch((err) => {
        this.setState({
          errMessage: "There was an error receiving response from server",
        });
      });
  }
  render() {
    const { verified } = this.state;
    return (
      <div
        className="recover"
        style={{
          padding: "120px 0 80px",
          minHeight: "70vh",
          backgroundColor: "rgb(15, 6, 9)",
        }}
      >
        <Container>
          <Header heading="Email Verification" />

          <Row className=" mt-5 text-center">
            <Col md={6} className="m-auto">
              <div className="text-danger font-weight-bold">
                <p>{this.state.errMessage}</p>
              </div>
              <div className="text-success font-weight-bold">
                <p>{this.state.message}</p>
              </div>

              {verified && (
                <button>
                  <a href="/login">Login</a>
                </button>
              )}
              {!verified && (
                <Form>
                  <Form.Group className="pb-2">
                    <Form.Label
                      className=" text-white font-weight-bold"
                      htmlFor="verification"
                    >
                      Enter Verification Code
                    </Form.Label>
                    <Form.Control
                      id="verification"
                      type="text"
                      placeholder="Paste your code here"
                      name="verification"
                      onChange={this.onTokenInput}
                    />
                  </Form.Group>
                  <div
                    onClick={this.onSubmitVerification}
                    className="haveAccount"
                    type="submit"
                    style={{ borderRadius: "10px" }}
                  >
                    Verify
                  </div>
                </Form>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Index;
