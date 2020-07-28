import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { Col, Container, Row } from "react-bootstrap";

class Testimony extends React.Component {
  state = {
    responsive: {
      0: {
        items: 1
      },
      650: {
        items: 1
      },
      700: {
        items: 1
      },
      1020: {
        items: 1
      },
      1920: {
        items: 1
      }
    }
  };

  render() {
    return (
      <div className="banner">
        <Container fluid>
          <Row>
            <Col>
              <OwlCarousel
                className=" owl-theme owl-responsive auto-width "
                responsiveClass={true}
                style={{ color: "black" }}
                loop={true}
                margin={10}
                dots={false}
                autoplay={true}
                autoplayTimeout={10000}
                items={4}
                responsive={this.state.responsive}
              >
                <div className="banner-content" data-aos="fade-up">
                  <div className="part-text">
                    <h1>Dash Trade</h1>
                    <p>
                      Dash Trade is a VIP Crypto Currency trading platform that
                      utilizes innovative proprietary technologies to provide
                      managed crypto currency trading services to yield higher
                      profits within limited period.
                    </p>
                    <div className="banner-buttons">
                      <a href="/register">Get Started</a>
                      <a href="/login">Invest Now</a>
                    </div>
                  </div>
                </div>

                <div className="banner-content" data-aos="fade-up">
                  <div className="part-text">
                    <h1>Dash Trade</h1>
                    <p>
                      Dash Trade is a VIP Crypto Currency trading platform that
                      utilizes innovative proprietary technologies to provide
                      managed crypto currency trading services to yield higher
                      profits within limited period.
                    </p>
                    <div className="banner-buttons">
                      <a href="/register">Get Started</a>
                      <a href="/login">Invest Now</a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Testimony;
