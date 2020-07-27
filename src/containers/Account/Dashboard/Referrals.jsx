import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import API from "../../../helpers/API";

export class TransactionPage extends Component {
  state = {
    referrals: [],
    date: "",
    name: "",
    balance: "",
    plan: "",
    errorMessage: ""
  };

  componentDidMount() {
    API.get("referrals?token=5ed037cbef9b5b0024bb01a0")
      .then(res => {
        const data = res.data;
        if (data.success === true) {
          this.setState({ referrals: data.data });
        } else {
          this.setState({ errorMessage: data.message });
        }
      })
      .catch(err => {
        this.setState({
          errorMessage: "Error reaching the server"
        });
      });
  }

  render() {
    const { referrals } = this.state;
    return (
      <Row>
        <Col md={12}>
          <Card className="account-cards">
            <Card.Title className="mb-2 text-center font-weight-bolder text-monospace  ">
              Your Referrals
            </Card.Title>
            <Table striped responsive bordered hover size="sm">
              <thead
                style={{
                  background: "#ef0909",
                  color: "white"
                }}
              >
                <th>Name</th>
                <th>balance</th>
                <th>Plan</th>
                <th>Date</th>
              </thead>
              <tbody>
                {Object.keys(referrals).map((k, i) => {
                  let data = referrals[k];
                  return (
                    <tr key={i}>
                      <td>{data.name}</td>
                      <td>{data.balance}</td>
                      <td>{data.plan}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default TransactionPage;
