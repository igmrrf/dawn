import React from "react";
import Footer from "../../../components/Landing/Footer";
import Navigation from "../../../components/Landing/Header";
import SignUp from "../../../components/Landing/SignUp";

const RegisterPage = (props) => {
  return (
    <>
      <Navigation />
      <SignUp />
      <Footer />
    </>
  );
};

export default RegisterPage;
