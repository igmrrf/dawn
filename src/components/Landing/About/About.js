import React from "react";
import png from "../../../assets/Landing/img/10.jpeg";
import Header from "../Sections/Header";
import { Container, Row, Col } from "react-bootstrap";

const About = props => {
  return (
    <div className="about">
      <Container>
        <Header
          heading="About Dash Trade"
          paragraph="Dash Trade is a registered international Bitcoin investment
								company."
        />

        <Row className="justify-content-center">
          <Col md={6} className="part-img" data-aos="fade-up">
            <img src={png} alt="Dash Trade" width="100%" />
          </Col>
          <Col
            md={6}
            className="d-xl-flex d-lg-flex d-block align-items-center"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div className="part-text">
              <p className={props.class}>
                Dash Trade is a registered legal international investment
                company. The company was created by a group of qualified
                experts, professional bankers, traders and analysts who
                specialized in the stock, bond, futures, currencies, gold,
                silver and oil trading with having more than ten years of
                extensive practical experiences of combined personal skills,
                knowledge, talents and collective ambitions for success. We
                believe that superior investment performance is achieved through
                a skillful balance of three core attributes: knowledge,
                experience and adaptability. There is only one way to be on the
                cutting edge – commitment to innovation. We do our best to
                achieve a consistent increase in investment performance for our
                clients, and superior value-add. We appreciate our clients
                loyalty and value the relationships we build with each customer.
                No matter what country you come from, our professional managers
                will help you to choose the investment product that best fits
                your demands. Our managers are constantly working on
                implementing unique trading methods with the most advanced and
                effective trading technology, competitive services, high-quality
                performance, genuine practices, excellent customer support
                service and fund safety that allow us to work successfully on
                the market in a highly profitable way. Having many investment
                methods allows us to maintain a constant high interest rate for
                our clients. One of our strongest advantages over competitors is
                that we provide the utmost flexibility and the most important
                insurance on funds being invested with us. The company provides
                Risk- Free Investment products to global investors, which is a
                landmark for the company performance. We use only
                ‘www.dashtrade.com’ domain name.
              </p>
              <a href="/about">{props.link}</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
