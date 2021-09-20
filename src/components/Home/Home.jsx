import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Country from "../CountryPage/Country";
import FetchError from "../FetchError";

const Home = () => {
	const url = "https://restcountries.eu/rest/v2/all";
	const [loaddig, setLoaddig] = useState(true);
	const [error, setError] = useState(false);
	const [countries, setCountries] = useState([]);

	const handleFetchCountryData = async () => {
		try {
			const response = await fetch(url);
			const result = await response.json();
			if (result.status) {
				setError(result.message);
			} else {
				setCountries(result);
				// console.log(result);
				setError(false);
				setLoaddig(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleFetchCountryData();
	}, []);

	return (
		<>
			{error ? (
				<FetchError message={error} />
			) : (
				<div className="container">
					{loaddig && <Spinner animation="border" variant="info" />}
					{countries.map(country => (
						<Country
							key={country.name}
							flag={country.flag}
							name={country.name}
							code={country.alpha2Code}
						/>
					))}
					{/* <Button onClick={handleSliceData(countries)}></Button> */}
				</div>
			)}
		</>
	);
};
export default Home;
