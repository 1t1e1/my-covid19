import { useEffect, useReducer } from "react";
import Axios from "axios";
import { arraySorter, countriesHashmapReducer, dataHandler } from "../../utils";
import { storeReducer, initialState, actionTypes } from "../../utils";

export default function useFetch(url) {
	const [state, dispatch] = useReducer(storeReducer, initialState);

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: actionTypes.init });

			try {
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

				const dataFromConfirmed = dataHandler(
					resConfirmed.data,
					countryHashmap
				);
				// some country entry is 0 because of issue #2 in README.md
				const dataFromRecovered = dataHandler(
					resRecovered.data,
					countryHashmap
				);

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
				dispatch({ type: actionTypes.success, payload: countriesCount });
			} catch (error) {
				console.log(error);
				dispatch({ type: actionTypes.fail });
			}
		};
		fetchData();
	}, [url]);
	return { ...state };
}
