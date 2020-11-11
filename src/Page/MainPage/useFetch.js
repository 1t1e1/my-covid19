import React, { useEffect, useState, useReducer } from "react";
import Axios from "axios";
import { countriesHashmap, countries, arraySorter } from "../../utils";

const reducerFunction = (state, action) => {
	switch (action.type) {
		case "FECTHING_INIT":
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case "FECTHING_SUCCESS":
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case "FECTHING_FAILURE":
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		default:
			return state;
		// throw new Error("11 reducer default case error");
	}
};

const initialState = {
	isLoading: false,
	isError: false,
	data: "",
};

export default function useFetch(url) {
	const [state, dispatch] = useReducer(reducerFunction, initialState);
	// const [state, setState] = useState();

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: "FECTHING_INIT" });
			const response = await Axios.get(url);
			const confirmed = response.data;

			// Parse countries confirmed cases data
			let countriesCount = countries.map((item) => {
				return { ...item };
			});

			for (let result of confirmed) {
				if (countriesHashmap.hasOwnProperty(result.countryRegion)) {
					countriesCount[
						countriesHashmap[result.countryRegion]
					].confirmedCount += result.confirmed;
				} else {
					countriesCount.push({
						country: result.countryRegion,
						confirmedCount: result.confirmed,
					});
				}
			}

			// Sort country data by highest confirmed cases
			countriesCount.sort(arraySorter("confirmedCount", "desc"));
			dispatch({ type: "FECTHING_SUCCESS", payload: countriesCount });
			// setState(countriesCount);
		};
		fetchData();
	}, [url]);
	return { ...state };
}
