import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Weather from "../components/Weather";

//Styles
import "../styles/CountryPage/CountryDetails.css";

const CountryDetails = () => {
	const { country } = useParams();

	const [details, setDetails] = useState([]);

	const { name, capital, nativeName, flag, subregion, region, population } =
		details;

	const fetchDetailsAPI = async () => {
		try {
			const response = await fetch(
				`https://restcountries.eu/rest/v2/name/${country}?`
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="container">
			<Card className="bg-info text-white">
				<Card.Img variant="top" src={flag} border="primary" />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Subtitle>Capital: {capital}</Card.Subtitle>
					<Card.Subtitle>Nombre nativo: {nativeName}</Card.Subtitle>
					<Card.Subtitle>Continente: {region}</Card.Subtitle>
					<Card.Subtitle>Subregión: {subregion}</Card.Subtitle>
					<Card.Subtitle>
						Habitantes: {new Intl.NumberFormat().format(population)}
					</Card.Subtitle>
				</Card.Body>
			</Card>
			<Weather capital={capital} />
		</div>
	);
};

export default CountryDetails;
