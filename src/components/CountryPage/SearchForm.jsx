import React from "react";

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
			<button onClick={handleFetchCountryData}>Buscar</button>
		</div>
	);
};

export default SearchForm;
