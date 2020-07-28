import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Header from "../Sections/Header";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      errMessage: "",
      name: "",
      email: "",
      subject: "",
      message: "",
      successMessage: ""
    };
  }
  onNameChange = event => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  onSubjectChange = event => {
    this.setState({ subject: event.target.value });
  };
  onMessageChange = event => {
    this.setState({ message: event.target.value });
  };
  onSubmitContact = () => {
    fetch("https://pure-peak-96458.herokuapp.com/contact", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        subject: this.state.email,
        message: this.state.message
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success === false) {
          this.setState({ errMessage: data.message });
        } else if (data.success === true) {
          this.setState({ successMessage: data.message });
        }
      })
      .catch(err => {
        this.setState({
          errMessage: "There was an error sending your message"
        });
      });
  };
  render() {
    return (
      <div className="message">
        <Container>
          <Header
            heading="Send
						Us
						A
						Message"
            paragraph="Contact customer care on our live chat or send us a message"
          />
          <div className="pb-2 text-danger">
            <p>{this.state.errMessage}</p>
          </div>
          <div className="pb-2 text-info">
            <p>{this.state.successMessage}</p>
          </div>

          <Row className="center">
            <Col md={6}>
              <div className="message-card" data-aos="fade-up">
                <Form>
                  <Row>
                    <Col>
                      <Form.Group className="pb-2">
                        <Form.Control
                          id="message-name"
                          name="name"
                          type="text"
                          placeholder="Enter Your Name"
                          onChange={this.onNameChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="pb-2">
                        <Form.Control
                          id="message-email"
                          name="email"
                          type="text"
                          placeholder="Enter Your E-mail"
                          onChange={this.onEmailChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="pb-2">
                    <Form.Control
                      id="message-subject"
                      type="text"
                      placeholder="Enter Subject"
                      name="subject"
                      onChange={this.onSubjectChange}
                    />
                  </Form.Group>
                  <Form.Group className="pb-2">
                    <Form.Control
                      id="name"
                      as="textarea"
                      rows="10"
                      placeholder="Write Your Message"
                      name="message"
                      onChange={this.onMessageChange}
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="d-flex justify-content-center align-content-center">
                <button onClick={this.onSubmitContact}>Submit</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Index;
