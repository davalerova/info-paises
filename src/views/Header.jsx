import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//Styles
import "../styles/Header.css";

const Header = () => {
	return (
		<div className="header">
			<Link to="/">
				<Button>Home</Button>
			</Link>
			<Link to="/country-search">
				<Button>Search</Button>
			</Link>
		</div>
	);
};

export default Header;
