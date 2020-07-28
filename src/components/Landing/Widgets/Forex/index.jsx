import React from "react";
import Col from "react-bootstrap/Col";

class index extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      currencies: [
        "EUR",
        "USD",
        "JPY",
        "GBP",
        "CHF",
        "AUD",
        "CAD",
        "NZD",
        "CNY"
      ],
      isTransparent: false,
      colorTheme: "dark",
      locale: "en"
    });
    document.getElementById("forex-trade").appendChild(script);
  }

  render() {
    return (
      <Col className="my-4" style={{ minHeight: "70vh" }}>
        <div id="forex-trade" className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </Col>
    );
  }
}
export default index;
