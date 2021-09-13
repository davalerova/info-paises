import React from "react";
import "../styles/FetchError.css";

const FetchError = ({ message }) => {
	return (
		<div className="error-warning">
			<h1>404</h1>
			<p>{message}</p>
		</div>
	);
};

export default FetchError;
