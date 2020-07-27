import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Header from "../Sections/Header";

import test3 from "../../../assets/Landing/img/testimony-img/3.jpg";

class Testimony extends React.Component {
  state = {
    responsive: {
      0: {
        items: 1
      },
      650: {
        items: 2
      },
      700: {
        items: 2
      },
      1020: {
        items: 3
      },
      1920: {
        items: 4
      }
    }
  };

  render() {
    return (
      <div className="testimonial">
        <div className="container">
          <Header
            paragraph="Don't take us for what we say, take us for what other customers say about us"
            heading="Reviews"
          />
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12">
              <OwlCarousel
                className=" owl-theme owl-responsive auto-width "
                responsiveClass={true}
                style={{ color: "black" }}
                loop={true}
                margin={10}
                dots={false}
                autoplay={true}
                autoplayTimeout={5000}
                items={4}
                responsive={this.state.responsive}
              >
                <div className="single-testimonial">
                  <div className="part-text">
                    <p>
                      ❝ Have been investing in different platforms but for what
                      you have offered and at the rate, you're the best out
                      there. Let's make money ❞
                    </p>
                    <span className="user-name">Britany Door</span>
                    <span className="user-profession">Customer</span>
                  </div>
                  <div className="part-img">
                    <img src={test3} id="first" alt="customer" />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Testimony;
