import React from "react";
import { FaUsersCog } from "react-icons/fa";
import Header from "../Sections/Header";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <Header
          heading="Awesome Features"
          paragraph="We have some notable features that make us the most trustworthy BTC investment platform"
        />

        <div className="row justify-content-lg-start justify-content-xl-start justify-content-sm-center">
          <Feature
            paragraph="We are security conscious and value your data. The entire
									system is protected with Comodo"
            heading="We're Secure"
            src={<FaUsersCog />}
          />
          <Feature
            paragraph="Our payment system is fully automated to avoid delay in withdrawal"
            heading="We're Fast"
            src={<FaUsersCog />}
          />
          <Feature
            paragraph="Our system is well detailed to enable easy access to all our
									services and packages"
            heading="Easy Navigation"
            src={<FaUsersCog />}
          />
          <Feature
            paragraph="We are always live. We use human support system to reply to
									our enquiries 24/7"
            heading="24/7 Support"
            src={<FaUsersCog />}
          />
          <Feature
            paragraph="The financial strength of everybody is not the same, that's why we have flexible plans to choose from"
            heading="Good Packages"
            src={<FaUsersCog />}
          />
          <Feature
            paragraph="We support only crypto currency to avoid the barrier of fiat in some countries"
            heading="We're Global"
            src={<FaUsersCog />}
          />
        </div>
      </div>
    </div>
  );
};
export default Features;
