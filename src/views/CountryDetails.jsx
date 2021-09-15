import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

//Styles
import "../styles/CountryPage/CountryDetails.css";

const CountryDetails = () => {
	const { country } = useParams();

	const [details, setDetails] = useState([]);

	const { name, capital, nativeName, flag, subregion } = details;

	const fetchDetailsAPI = async () => {
		try {
			const response = await fetch(
				`https://restcountries.eu/rest/v2/name/${country}?fullText=true`
			);
			const result = await response.json();
			setDetails(result[0]);
			console.log("Desde detealles", result);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchDetailsAPI();
	});

	return (
		<>
			<Card style={{ width: "50%", marginTop: "10px", margin: "auto" }}>
				<Card.Img variant="top" src={flag} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Subtitle>Capital: {capital}</Card.Subtitle>
					<Card.Subtitle>Nombre nativo: {nativeName}</Card.Subtitle>
					<Card.Subtitle>Continente: {subregion}</Card.Subtitle>
				</Card.Body>
			</Card>
			{/* <Card style={{ width: "50%", marginTop: "10px", margin: "auto" }}>
				<Card.Img
					variant="top"
					src="https://covid19api.com/assets/images/image06.png?v=a96a87fa"
				/>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Subtitle>Capital: {capital}</Card.Subtitle>
					<Card.Subtitle>Nombre nativo: {nativeName}</Card.Subtitle>
					<Card.Subtitle>Continente: {subregion}</Card.Subtitle>
					<Card.Subtitle>Código: {alpha2Code}</Card.Subtitle>
				</Card.Body>
			</Card> */}
			{/* <Covid code={alpha2Code} /> */}
		</>
	);
};

export default CountryDetails;
