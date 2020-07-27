import React from "react";
import Navigation from "../../../components/Account/Navigation/Navigation";
import Footer from "../../../components/Account/Navigation/Footer";
import InvestmentPlans from "../../../components/Landing/Investment/Investment";

const Investment = () => {
	return (
		<div className="investment">
			<Navigation />
			<InvestmentPlans />
			<Footer />
		</div>
	);
};
export default Investment;
