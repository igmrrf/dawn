import React from "react";
import Header from "../../../components/Landing/Header/Header";
import Register from "../../../components/Landing/Register/Register";
import Footer from "../../../components/Landing/Footer/Footer";

const RegisterPage = props => {
  console.log(props);
  return (
    <>
      <Header />
      <Register prop={props.match.params.id} />
      <Footer />
    </>
  );
};

export default RegisterPage;
