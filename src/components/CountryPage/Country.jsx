import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//styles
import "../../styles/CountryPage/Country.css";

const Country = ({ name, flag, code }) => {
	return (
		<>
			<Card style={{ width: "31%", marginTop: "10px" }}>
				<Card.Img variant="top" src={flag} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Link to={`/details/${name}`}>Ver más</Link>
				</Card.Body>
			</Card>
		</>
	);
};

export default Country;
