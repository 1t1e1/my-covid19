import { useEffect, useReducer } from "react";
import Axios from "axios";
import { arraySorter, countriesHashmapReducer } from "../../utils";

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

const dataHandler = (apiData, hashmap) => {
	const resultArr = new Array(Object.keys(hashmap).length)
		.fill(null)
		.map((u, i) => {
			return {
				country: "",
				confirmedCount: 0,
				deathsCount: 0,
				recoveredCount: 0,
			};
		});

	apiData.forEach((info) => {
		let countryName = info.countryRegion;
		let obj = resultArr[hashmap[countryName]];

		["confirmed", "recovered", "deaths"].forEach((el) => {
			info[el] && (obj[el + "Count"] += info[el]);

			// TODO ulke bilgilerini svg map icin lazim olacak.
			if (!obj.country) {
				obj.country = countryName;
				obj.iso3 = info.iso3;
				obj.iso2 = info.iso2;
			}
		});
	});

	return resultArr;
};

export default function useFetch(url) {
	const [state, dispatch] = useReducer(reducerFunction, initialState);

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: "FECTHING_INIT" });

			const countriesReq = await Axios.get(
				`https://covid19.mathdro.id/api/countries/`
			);
			const countryHashmap = countriesReq.data.countries.reduce(
				countriesHashmapReducer,
				{}
			);

			// there are 2 requests because of issue #1 in README.md
			const resConfirmed = await Axios.get(
				`https://covid19.mathdro.id/api/confirmed`
			);
			const resRecovered = await Axios.get(
				"https://covid19.mathdro.id/api/recovered"
			);

			const dataFromConfirmed = dataHandler(resConfirmed.data, countryHashmap);
			// some country entry is 0 because of issue #2 in README.md
			const dataFromRecovered = dataHandler(resRecovered.data, countryHashmap);

			// union
			const countriesCount = dataFromConfirmed.map((country1, index) => {
				const country2 = dataFromRecovered[index];
				return {
					...country1,
					confirmedCount: Math.max(
						country1.confirmedCount,
						country2.confirmedCount
					),
					deathsCount: Math.max(country2.deathsCount, country1.deathsCount),
					recoveredCount: Math.max(
						country1.recoveredCount,
						country2.recoveredCount
					),
				};
			});

			countriesCount.sort(arraySorter("confirmedCount", "desc"));
			dispatch({ type: "FECTHING_SUCCESS", payload: countriesCount });
		};
		fetchData();
	}, [url]);
	return { ...state };
}
