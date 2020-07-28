//Dependecies import
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Landing/css/style.css";
import "./assets/Account/css/style.css";
import "./assets/Admin/css/style.css";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";

//Landing Page Imports
import About from "./containers/Landing/About";
import Contact from "./containers/Landing/Contact";
import Home from "./containers/Landing/Home";
import SignIn from "./containers/Landing/SignIn";
import SignUp from "./containers/Landing/SignUp";
import Privacy from "./containers/Landing/Hidden/Privacy";
import Recover from "./containers/Landing/Hidden/Recover";
import Verify from "./containers/Landing/Hidden/Verify";
import Markets from "./containers/Landing/Markets";

//Account Imports
import Dashboard from "./containers/Account/Dashboard/DashboardPage";
import Withdrawal from "./containers/Account/Withdrawal/WithdrawalPage";
import Transactions from "./containers/Account/Transactions/TransactionPage";
import Settings from "./containers/Account/Settings/SettingsPage";
import Wallet from "./containers/Account/Wallet/WalletPage";
import Deposit from "./containers/Account/Deposit/DepositPage";
import InvestmentPlans from "./containers/Account/Investment/InvestmentPage";
//Admin Imports
import Admin from "./containers/Admin/Dashboard";
import Investors from "./containers/Admin/Investors";
import Edit from "./containers/Admin/Edit";
import UserTransactions from "./containers/Admin/Transactions";
import Bank from "./containers/Admin/Bank";

class Routes extends Component {
  constructor() {
    super();
    AOS.init();
  }

  componentDidUpdate() {
    AOS.refresh();
  }
  render() {
    return (
      <Router>
        <div className="OneAboveAll">
          <Switch>
            {/* //Landing Page Routes */}
            <Route exact path="/" component={Home} />
            <Route path="/sign-up/:id" component={SignUp} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/markets" component={Markets} />
            <Route exact path="/about-us" component={About} />
            {/* //Account Routes */}
            <Route exact path="/account/dashboard" component={Dashboard} />
            <Route exact path="/account/deposit" component={Deposit} />
            <Route exact path="/account/Wallet" component={Wallet} />
            <Route
              exact
              path="/account/investment"
              component={InvestmentPlans}
            />
            <Route exact path="/account/settings" component={Settings} />
            <Route
              exact
              path="/account/transactions"
              component={Transactions}
            />
            <Route exact path="/account/withdrawal" component={Withdrawal} />

            {/* //Admin Routes */}

            <Route exact path="/asghdjklajsj" component={Admin} />
            <Route exact path="/asghdjklajsj/investors" component={Investors} />
            <Route exact path="/asghdjklajsj/edit" component={Edit} />
            <Route
              exact
              path="/asghdjklajsj/transactions"
              component={UserTransactions}
            />
            <Route exact path="/asghdjklajsj/bank" component={Bank} />
            {/* //Hidden Routes */}
            <Route exact path="/recover" component={Recover} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/verify" component={Verify} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
