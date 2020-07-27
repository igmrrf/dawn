import React from "react";
import Header from "../Sections/Header";
import Invest from "./Invest";

class Investment extends React.Component {
  state = {
    currency: ""
  };
  componentDidMount() {
    const date = new Date();

    const main = String(date);
    const gmt = main.split(" ");
    const GMTZone = gmt[5];

    const mainer = GMTZone.substr(4);
    const addOrMinus = GMTZone.substr(3, 1);

    const NumberGMT = Number(mainer);
    console.log(addOrMinus, NumberGMT);

    if (mainer < 400 && mainer > 100) {
      this.setState({ currency: "R" });
    } else {
      this.setState({ currency: "$" });
    }
  }
  render() {
    return (
      <div className="plan">
        <div className="container">
          <Header
            paragraph="Flexible Bitcoin investment plan, Choose any bitcoin plan that suites your financial capability"
            heading="Bitcoin Investment Plan"
          />
          <div className="row justify-content-xl-start justify-content-lg-start justify-content-sm-center">
            {this.state.currency === "R" ? (
              <>
                <Invest
                  plan="BRONZE"
                  days="14"
                  range="R1,000 - R10,000"
                  percent="200%"
                  effect="fade-right"
                />
                <Invest
                  plan="SILVER"
                  days="30"
                  range="R10,000 - R50,000"
                  percent="250%"
                  effect="fade-right"
                />
                <Invest
                  plan="GOLD"
                  days="60"
                  range="R50,000 - R250,000"
                  percent="300%"
                  effect="fade-right"
                />
                <Invest
                  plan="PLANTINUM"
                  days="∞"
                  range="Negotiable"
                  percent="300%"
                  effect="fade-right"
                />
              </>
            ) : (
              <>
                <Invest
                  plan="BRONZE"
                  days="14"
                  range="$100 - $1,000"
                  percent="200%"
                  effect="fade-right"
                  duration="1000"
                />
                <Invest
                  plan="SILVER"
                  days="30"
                  range="$1,000 - $10,000"
                  percent="250%"
                  effect="fade-right"
                  duration="1500"
                />
                <Invest
                  plan="GOLD"
                  days="60"
                  range="$10,000 - $100,000"
                  percent="250%"
                  effect="fade-right"
                  duration="2000"
                />
                <Invest
                  plan="PLANTINUM"
                  days="∞"
                  range="Negotiable"
                  percent="300%"
                  effect="fade-right"
                />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Investment;
