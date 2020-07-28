import React from "react";
import { Col, Row } from "react-bootstrap";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const index = () => (
	<Row>
		<Col
			style={{
				minHeight: "70vh",
			}}
		>
			<TradingViewWidget
				symbol="BITSTAMP:BTCUSD"
				theme={Themes.DARK}
				locale="fr"
				internal="D"
				toolbar_bg="#f1f3f6"
				timezone="Etc/UTC"
				autosize
				details
				hotlist
				calendar
				allow_symbol_change
				withdateranges
			/>
		</Col>
	</Row>
);

export default index;
