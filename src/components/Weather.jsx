import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../styles/CountryPage/CountryDetails.css";
import Location from "../assets/location.svg";
import Refresh from "../assets/refresh-page-option.svg";
import Temp from "../assets/thermometer.svg";
import Feels from "../assets/fiebre.svg";
import Humidity from "../assets/humidity.svg";
import Atm from "../assets/gauge.svg";
import Eye from "../assets/eye.svg";
import Sunrise from "../assets/sunrise.svg";
import Sunset from "../assets/sunset.svg";

const Weather = ({ capital }) => {
	const [data, setData] = useState([]);

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [capital]);
	return (
		<>
			{data.main && (
				<Card className="bg-info text-white">
					<Card.Body>
						<Card.Title>
							<img className="icon" src={Location} alt="Location" />
							{`: ${capital}`}
						</Card.Title>
						<Card.Title>
							<img className="icon" src={Refresh} alt="Refresh" />
							{`: ${new Date(
								data.dt * 1000 + data.timezone * 1000
							).toUTCString()}`}
						</Card.Title>
						<Card.Title>
							<img className="icon" src={Temp} alt="Temp" />
							{`: ${Math.round(data.main.temp - 273.15)}°C`}
						</Card.Title>
						<Card.Title>
							<img className="icon" src={Feels} alt="Feels" />

							{`: ${Math.round(data.main.feels_like - 273.15)} °C`}
						</Card.Title>
						<Card.Title>
							<img className="icon" src={Humidity} alt="Humidity" />
							{`: ${Math.round(data.main.humidity)}%`}
						</Card.Title>
						<Card.Title>
							<img className="icon" src={Atm} alt="Atm" />
							{`: ${Math.round(data.main.pressure)} atm`}
						</Card.Title>
						<Card.Title>
							<img className="icon" src={Eye} alt="Eye" />
							{`: ${data.visibility / 1000} Km`}
						</Card.Title>
						<Card.Title>
							<img className="icon" src={Sunrise} alt="Sunrise" />

							{`: ${new Date(
								data.sys.sunrise * 1000 + data.timezone * 1000
							).toUTCString()}`}
						</Card.Title>
						<Card.Title>
							<img className="icon" src={Sunset} alt="Sunset" />

							{`: ${new Date(
								data.sys.sunset * 1000 + data.timezone * 1000
							).toUTCString()}`}
						</Card.Title>
					</Card.Body>
				</Card>
			)}
		</>
	);
};

export default Weather;
