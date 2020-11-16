import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders count up deaths ", () => {
	// empty test, just for learning
	const { getByText } = render(<App />);
	const deaths = getByText(/deaths/i);
	expect(deaths).toBeInTheDocument();
});
