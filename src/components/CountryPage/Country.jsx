import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//styles
import "../../styles/CountryPage/Country.css";

const Country = ({ name, flag, code }) => {
	useEffect(() => {
		console.log("Flag desde country con effect: ", flag);
	}, [flag]);
	return (
		<>
			<Card className="bg-info text-white">
				<Card.Img variant="top" src={flag} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Link to={`/details/${name}`}>
						<Button variant="primary" bg="primary">
							Ver más
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</>
	);
};

export default Country;
