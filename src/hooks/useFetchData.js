import { useState, useEffect } from "react";

const useFetchData = url => {
	const [data, setData] = useState([]);
	const handleFetchAPI = async () => {
		try {
			const response = await fetch(url);
			const { results, info } = await response.json();
			setData(results);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		handleFetchAPI();
	}, [url]);

	return { data };
};

export default useFetchData;
