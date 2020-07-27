import React from "react";
import { FaUsersCog } from "react-icons/fa";
import Header from "../Sections/Header";
import Service from "./Service";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <Header heading="Services" paragraph="The Packages we offer" />

        <div className="row justify-content-lg-start justify-content-xl-start justify-content-sm-center">
          <Service
            paragraph="We are security conscious and value your data. The entire
									system is protected with Comodo"
            heading="Bronze"
            src={<FaUsersCog />}
          />
          <Service
            paragraph="Our payment system is fully automated to avoid delay in withdrawal"
            heading="Silver"
            src={<FaUsersCog />}
          />
          <Service
            paragraph="Our system is well detailed to enable easy access to all our
									services and packages"
            heading="Gold"
            src={<FaUsersCog />}
          />
          <Service
            paragraph="We are always live. We use human support system to reply to
									our enquiries 24/7"
            heading="Platinum"
            src={<FaUsersCog />}
          />
        </div>
      </div>
    </div>
  );
};
export default Services;
