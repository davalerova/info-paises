import React from "react";
import { Button } from "react-bootstrap";

//styles
import "../../styles/CountryPage/SearchForm.css";

const SearchForm = ({ setName, handleFetchCountryData }) => {
	return (
		<div className="search">
			<input
				type="text"
				name=""
				id=""
				placeholder="Nombre del país"
				onChange={e => setName(e.target.value)}
			/>
			<Button onClick={handleFetchCountryData}>Buscar</Button>
		</div>
	);
};

export default SearchForm;
