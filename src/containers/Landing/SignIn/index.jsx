import React from "react";
import Footer from "../../../components/Landing/Footer";
import Navigation from "../../../components/Landing/Header";
import SignIn from "../../../components/Landing/Login";

const LoginPage = () => {
  return (
    <div>
      <Navigation />
      <SignIn />
      <Footer />
    </div>
  );
};
export default LoginPage;
