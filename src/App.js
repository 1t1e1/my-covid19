import React from "react";
import MyComponent from "./Component/MyComponent";
import Container from "./Component/Layout/Container";
import MainPage from "./Page/MainPage/MainPage";
import "./App.css";

function App() {
	return (
		<div>
			<Container>
				<MainPage>
					<MyComponent></MyComponent>
				</MainPage>
			</Container>
		</div>
	);
}

export default App;
