import React from "react";
import Card from "react-bootstrap/Card";

class CryptoUpdate extends React.Component {
	componentDidMount() {
		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
		script.async = true;
		script.innerHTML = JSON.stringify({
			symbol: "BITSTAMP:BTCUSD",
			width: 350,
			height: 220,
			locale: "en",
			dateRange: "12m",
			colorTheme: "light",
			trendLineColor: "#37a6ef",
			underLineColor: "#e3f2fd",
			isTransparent: false,
			autosize: false,
			largeChartUrl: ""
		});
		document.getElementById("crypt").appendChild(script);
	}

	render() {
		return (
			<Card id="crypt" className="account-cards">
				<div className="tradingview-widget-container">
					<div className="tradingview-widget-container__widget"></div>
				</div>
			</Card>
		);
	}
}
export default CryptoUpdate;
