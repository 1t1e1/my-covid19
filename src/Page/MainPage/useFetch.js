import { useEffect, useReducer } from "react";
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

function tekrarHashing(confirmed) {
	// Parse countries confirmed cases data
	let countriesCount = countries.map((item) => {
		return { ...item };
	});

	for (let result of confirmed) {
		if (countriesHashmap.hasOwnProperty(result.countryRegion)) {
			const refCountryCount =
				countriesCount[countriesHashmap[result.countryRegion]];
			refCountryCount.confirmedCount += result.confirmed;
			refCountryCount.recoveredCount += result.recovered;
			refCountryCount.deathsCount += result.deaths;
		} else {
			countriesCount.push({
				country: result.countryRegion,
				confirmedCount: result.confirmed,
				recoveredCount: result.recovered,
				deathsCount: result.deaths,
			});
		}
	}
	return countriesCount;
}

export default function useFetch(url) {
	const [state, dispatch] = useReducer(reducerFunction, initialState);

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: "FECTHING_INIT" });
			// there are 2 requests because of issue #1 in README.md
			const resConfirmed = await Axios.get(
				`https://covid19.mathdro.id/api/confirmed`
			);
			const resRecovered = await Axios.get(
				"https://covid19.mathdro.id/api/recovered"
			);

			const confirmed = resConfirmed.data;
			const recovered = resRecovered.data;

			const countriesCount1 = tekrarHashing(confirmed);
			const countriesCount2 = tekrarHashing(recovered);

			// sentezle
			const countriesCount = countriesCount1.map((country, index) => {
				const recoveredData = countriesCount2[index];

				return {
					country: country.country,
					confirmedCount:
						country.confirmedCount || recoveredData.confirmedCount,
					deathsCount: country.deathsCount || recoveredData.deathsCount,
					recoveredCount:
						country.recoveredCount || recoveredData.recoveredCount,
				};
			});

			// Sort country data by highest confirmed cases
			countriesCount.sort(arraySorter("confirmedCount", "desc"));
			dispatch({ type: "FECTHING_SUCCESS", payload: countriesCount });
			// TODO make method for desc asc for all keys.
		};
		fetchData();
	}, [url]);
	return { ...state };
}
