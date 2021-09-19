import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../styles/CountryPage/CountryDetails.css";

const Weather = ({ capital }) => {
	const [data, setData] = useState([]);
	const [temp, setTemp] = useState(0);

	const fetchDataAPI = async () => {
		const apiKey = "1eb8eacb6786f2ff70204dbe19cb4eaf";
		if (capital) {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`
			);
			const request = await response.json();
			console.log(request);
			setData(request);
		}
	};

	useEffect(() => {
		fetchDataAPI();
	}, [capital]);
	return (
		<>
			{data.main && (
				<Card>
					<Card.Body>
						<Card.Title>City: {capital}°C</Card.Title>
						<Card.Title>Date: {data.dt}</Card.Title>
						<Card.Title>
							Temp: {Math.round(data.main.temp - 273.15)}°C
						</Card.Title>
						<Card.Title>
							Feels like: {Math.round(data.main.feels_like - 273.15)} °C
						</Card.Title>
						<Card.Title>Humidity: {Math.round(data.main.humidity)}%</Card.Title>
						<Card.Title>
							Pressure: {Math.round(data.main.pressure)} atm
						</Card.Title>
					</Card.Body>
				</Card>
			)}
		</>
	);
};

export default Weather;
