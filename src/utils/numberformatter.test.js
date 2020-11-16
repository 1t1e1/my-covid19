import thousands_separators from "./numberformatter";

describe("thousands separator woks ", () => {
	it(" separete 1 milyon to ", () => {
		expect(thousands_separators(1000, ".")).toBe("1.000");
		expect(thousands_separators(1234)).toBe("1,234");
	});
});
