import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import FetchError from "./components/FetchError";
import Home from "./components/Home/Home";
import CountryDetails from "./views/CountryDetails";

//VIEWS
import CountryPage from "./views/CountryPage";
import Header from "./views/Header";

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/country-search" exact>
					<CountryPage />
				</Route>
				<Route path="/details/:country" exact>
					<CountryDetails />
				</Route>
				<Route path="*">
					<FetchError />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
