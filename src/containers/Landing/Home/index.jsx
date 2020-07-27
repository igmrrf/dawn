import React from "react";
import Header from "../../../components/Landing/Header/Header";
import Banner from "../../../components/Landing/Banner/Banner";
import Statistics from "../../../components/Landing/Statistics/Statistics";
import About from "../../../components/Landing/About/About";
import Features from "../../../components/Landing/Features/Features";
import Services from "../../../components/Landing/Services/Services";
import Investment from "../../../components/Landing/Investment/Investment";
import Footer from "../../../components/Landing/Footer/Footer";
import Testimony from "../../../components/Landing/Testimony/Testimony";
import FAQ from "../../../components/Landing/Faq";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About class="text" link="Know More" />
      <Services />
      <Features />
      <FAQ />
      <Investment />
      <Statistics />
      <Testimony />
      <Footer />
    </div>
  );
};
export default Home;
