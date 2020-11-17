import { useEffect, useReducer } from "react";
import Axios from "axios";
import {
	countriesHashmap,
	countries,
	arraySorter,
	countriesHashmapReducer,
} from "../../utils";

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

const myHashing = (confirmed, countriesObject) => {
	const resultArr = new Array(Object.keys(countriesObject).length)
		.fill(null)
		.map((u, i) => {
			return {
				country: "",
				confirmedCount: 0,
				deathsCount: 0,
				recoveredCount: 0,
			};
		});

	confirmed.forEach((info) => {
		let obj = resultArr[countriesObject[info.countryRegion]];
		// if (info.countryRegion == "US")
		// 	console.log(
		// 		"myHashing -> info",
		// 		obj[confirmedCount],
		// 		"  ",
		// 		info[confirmed]
		// 	);
		// if (info.countryRegion == "US") console.log(obj);
		// console.log(countriesObject[info.countryRegion]);

		//
		["confirmed", "recovered", "deaths"].forEach((el) => {
			// obj[el + "Count"]
			info[el] && (obj[el + "Count"] += info[el]);
			// : (obj[el + "Count"] = 0);
		});
		// ulke bilgilerini tamamla.
		if (!obj.country) {
			obj.country = info.countryRegion;
			obj.iso3 = info.iso3;
			obj.iso2 = info.iso2;
		}
	});

	return resultArr;
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

			const countriesReq = await Axios.get(
				`https://covid19.mathdro.id/api/countries/`
			);
			const countriesObject = countriesReq.data.countries.reduce(
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

			const confirmed = resConfirmed.data;
			const recovered = resRecovered.data;

			// const countriesCount1 = tekrarHashing(confirmed);
			// const countriesCount2 = tekrarHashing(recovered);
			const countriesCount1 = myHashing(confirmed, countriesObject);
			const countriesCount2 = myHashing(recovered, countriesObject);
			// console.log("useFetch -> eski hashing", countriesCount11);
			// console.log("useFetch -> confirmed result data", countriesCount1);
			//

			// countriesCount11.forEach((el, index) => {
			// 	console.log(el.deathsCount - countriesCount1.deathsCount);
			// });

			// sentezle
			const countriesCount = countriesCount1.map((country, index) => {
				// console.log("useFetch -> country", country);
				const secondData = countriesCount2[index];

				// if (country.country == "Belgium")
				// 	console.log("useFetch -> secondData", { ...country }, "second", {
				// 		...secondData,
				// 	});

				return {
					...country,
					confirmedCount: Math.max(
						country.confirmedCount,
						secondData.confirmedCount
					),
					confirmedCount: Math.max(
						country.confirmedCount,
						secondData.confirmedCount
					),
					deathsCount: Math.max(secondData.deathsCount, country.deathsCount),
					recoveredCount: Math.max(
						country.recoveredCount,
						secondData.recoveredCount
					),
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
