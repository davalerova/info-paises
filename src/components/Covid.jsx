import React, { useEffect, useState } from "react";

const Covid = alpha2Code => {
	const [data, setData] = useState([]);
	const fetchApi = async () => {
		const response = await fetch("https://api.covid19api.com/summary");
		const request = await response.json();
		setData(request.Countries);
		console.log(request.Countries);
	};
	console.log("alphacode:", alpha2Code);
	console.log("coutrycode:", data[5].CountryCode);
	const dataCovid = data.filter(
		country => country.CountryCode === alpha2Code.code
	);
	console.log("data", dataCovid);

	useEffect(() => {
		fetchApi();
	}, []);
	return <div>holaa</div>;
};

export default Covid;
