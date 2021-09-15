import React, { useState } from "react";

//Components
import SearchForm from "../components/CountryPage/SearchForm";
import Country from "../components/CountryPage/Country";
import FetchError from "../components/FetchError";

const CountryPages = () => {
	const [countryData, setCountryData] = useState([]);
	const [name, setName] = useState(null);
	const [error, setError] = useState(false);
	// const [loaddig, setLoaddig] = useState(true);

	//Functions
	const handleFetchCountryData = async () => {
		try {
			const response = await fetch(
				`https://restcountries.eu/rest/v2/name/${name}?fullText=true`
			);
			const result = await response.json();
			console.log(result);
			if (result.status) {
				setError(result.message);
			} else {
				setCountryData(result);
				setError(false);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<SearchForm
				setName={setName}
				handleFetchCountryData={handleFetchCountryData}
			/>{" "}
			{error ? (
				<FetchError message={error} />
			) : (
				<div className="container">
					{countryData.map(country => (
						<Country
							key={country.name}
							flag={country.flag}
							name={country.name}
							code={country.alpha2Code}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default CountryPages;
