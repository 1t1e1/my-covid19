// this script create countriesHashMap.js
// run with `node hashmapCreator.js`

const axios = require("axios");
const fs = require("fs");

const storeData = (data, path, extra) => {
	try {
		if (extra.includes("Hash")) {
			let explanation = `// this file created by hashmapCreator.js \n\n${extra}`;
			fs.writeFileSync(path, explanation + JSON.stringify(data));
		} else {
			fs.writeFileSync(path, ";\n\n" + extra + JSON.stringify(data) + ";", {
				flag: "a",
			});
		}
	} catch (err) {
		console.error(err);
	}
};

function writeCountryHashmap(path) {
	axios
		.get("https://covid19.mathdro.id/api/countries")
		.then((response) => response.data)
		.then((json) => {
			const hashmap = json.countries.reduce((acc, cur, index) => {
				acc[cur.name] = index;
				return acc;
			}, {});

			storeData(hashmap, path, "export const countriesHashmap = ");
			return json;
		})
		.then((json) => {
			const countries = json.countries.map((country) => {
				return {
					country: country.name,
					confirmedCount: 0,
					deathsCount: 0,
					recoveredCount: 0,
				};
			});

			storeData(countries, path, "export const countries = ");
		});
}

writeCountryHashmap("./countrieshashmap.js");
