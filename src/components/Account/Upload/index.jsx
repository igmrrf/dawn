import React, { useState } from "react";
import upload from "../../../assets/Account/img/storage.png";
import API from "../../../helpers/API";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function App(props) {
	const [receipt, setReceipt] = useState("");
	const [loading, setLoading] = useState(false);
	const [defaultImage, setDefaultImage] = useState(false);
	const [error, setError] = useState("");

	const onFileUpload = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "optimal");
		setLoading(true);
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/runsboy/image/upload",
			{
				method: "POST",
				body: data,
			}
		);
		const file = await res.json();
		const sit = await file.secure_url;
		setReceipt(sit);
		setLoading(false);
		setDefaultImage(true);
	};

	const imageToDatabase = () => {
		if (props.amount === 0) {
			setError("Please, input amount deposited");
		} else {
			API.post(
				"transaction?token=" + window.localStorage.getItem("token"),

				{
					amount: props.amount,
					plan: props.plan,
					type: props.type,
					receipt_url: receipt,
				}
			)
				.then((res) => {
					const data = res.data;
					if (data.success === false) {
						setError(data.message);
					} else if (data.success === true) {
						setError(data.message);
						setTimeout(() => {
							window.location.href = "/account/transactions";
						}, 2000);
					}
				})
				.catch((err) => {
					this.setState({
						errorMessage: "There's has been an error processing transaction",
					});
				});
		}
	};

	return (
		<Container>
			<Row className="d-flex justify-content-center">
				<Col
					className="my-2"
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
					md={6}
				>
					<input
						type="file"
						name="file"
						onChange={onFileUpload}
						style={{
							marginBottom: "30px",
							width: "100px",
							overflow: "hidden",
						}}
					/>
					{!defaultImage && (
						<img
							alt=""
							src={upload}
							style={{ minWidth: "200px", minHeight: "200px", width: "200px" }}
						/>
					)}

					{loading && <p>Uploading....</p>}
					{defaultImage && (
						<img
							alt=""
							src={receipt}
							style={{ minWidth: "200px", minHeight: "200px", width: "200px" }}
						/>
					)}
				</Col>
			</Row>
			<p>{error}</p>
			<Button
				className="btn btn-info"
				onClick={imageToDatabase}
				disabled={!defaultImage}
			>
				SUBMIT
			</Button>
		</Container>
	);
}
