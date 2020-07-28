import React from "react";
import { FaUsersCog, FaRegChartBar } from "react-icons/fa";
import { GiCardExchange } from "react-icons/gi";
import { AiOutlineAreaChart } from "react-icons/ai";
import Statistic from "./Statistic";
import Header from "../Sections/Header";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      amount1: 0,
      amount2: 0,
      amount3: 0,
      amount4: 0,
    };
  }

  increaseNumber = () => {
    setInterval(() => {
      if (this.state.amount1 < 1908) {
        this.setState({ amount1: this.state.amount1 + 6 });
      }
      if (this.state.amount2 < 7398) {
        this.setState({ amount2: this.state.amount2 + 18 });
      }
      if (this.state.amount3 < 52992) {
        this.setState({ amount3: this.state.amount3 + 48 });
      }
      if (this.state.amount4 < 40320) {
        this.setState({ amount4: this.state.amount4 + 48 });
      }
    }, 5);
  };
  componentDidMount() {
    this.increaseNumber();
  }
  render() {
    return (
      <div className="statics">
        <div className="container">
          <Header
            paragraph="Our statistics comprise of all the Bitcoin Investment activities
								in our system"
            heading="Our Stats"
          />

          <div className="row justify-content-xl-start justify-content-lg-start justify-content-sm-center">
            <Statistic
              tag="Total Online"
              max="1,098"
              amount={this.state.amount1}
              src={<FaUsersCog />}
            />

            <Statistic
              tag="Total Investors"
              max="7,398"
              amount={this.state.amount2}
              src={<FaRegChartBar />}
            />
            <Statistic
              tag="Total Deposit"
              max="49,223"
              amount={this.state.amount3}
              src={<GiCardExchange />}
            />
            <Statistic
              tag="Total Withdrawals"
              max="32,837"
              amount={this.state.amount4}
              src={<AiOutlineAreaChart />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
