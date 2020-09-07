import React from "react";
import MyComponent from "./Component/MyComponent";
import Container from "./Component/Layout/Container";
import "./App.css";

function App() {
	return (
		<div>
			<Container>
				<MyComponent></MyComponent>
			</Container>
		</div>
	);
}

export default App;
