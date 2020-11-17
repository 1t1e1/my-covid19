export const countriesHashmapReducer = (acc, cv, index) => {
	acc[cv.name] = index;
	return acc;
};

export const dataHandler = (apiData, hashmap) => {
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
