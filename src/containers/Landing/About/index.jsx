import React from "react";
import About from "../../../components/Landing/About";
import Certificates from "../../../components/Landing/Certificates";
import Awards from "../../../components/Landing/Awards";
import Navigation from "../../../components/Landing/Header";
import Footer from "../../../components/Landing/Footer";

const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <About />
      <Awards />
      <Certificates />
      <Footer />
    </div>
  );
};
export default AboutPage;
