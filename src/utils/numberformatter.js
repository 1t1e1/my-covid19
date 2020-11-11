// function thousands_separators(num, seperator = ",") {
const thousands_separators = (num, seperator = ",") => {
	const num_parts = num.toString().split(".");
	num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, seperator);
	return num_parts.join(".");
};

export default thousands_separators;
