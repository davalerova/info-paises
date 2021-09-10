import React from "react";
import { Link } from "react-router-dom";

//styles
import "../../styles/CountryPage/Country.css";

const Country = ({ name, flag, code }) => {
	return (
		<div className="country-container">
			<h2>{name}</h2>
			<img src={flag} alt={code} />
			<Link to={`/details/${name}`}>Ver más</Link>
		</div>
	);
};

export default Country;
