import React, { Component } from "react";
import Header from "../../../components/Landing/Header/Header";
import Login from "../../../components/Landing/Login/Login";
import Footer from "../../../components/Landing/Footer/Footer";

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}
