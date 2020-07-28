import React from "react";
import About from "../../../components/Landing/About";
import Banner from "../../../components/Landing/Banner";
import Faq from "../../../components/Landing/Faq";
import Features from "../../../components/Landing/Features";
import Services from "../../../components/Landing/Services";
import Footing from "../../../components/Landing/Footer";
import Navigation from "../../../components/Landing/Header";
import Plans from "../../../components/Landing/Investment";
import Review from "../../../components/Landing/Testimony";
import Statistics from "../../../components/Landing/Statistics";

const Home = () => {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <About />
      <Services />
      <Features />
      <Faq />
      <Plans />
      <Statistics />
      <Review />
      <Footing />
    </div>
  );
};
export default Home;
