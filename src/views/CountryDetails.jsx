import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Styles
import "../styles/CountryPage/CountryDetails.css";

const CountryDetails = () => {
	const { country } = useParams();

	const [details, setDetails] = useState([]);

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
	}, [country]);

	return (
		<div className="container">
			<h1>{details.name}</h1>
			<img src={details.flag} alt={details.name} />
			<p>Capital: {details.capital}</p>
			<p>Nombre nativo: {details.nativeName}</p>
			<p>Continente: {details.subregion}</p>
		</div>
	);
};

export default CountryDetails;
