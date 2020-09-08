import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import CountUpCard from "./CountUpCard";
import Axios from "axios";

export default function CountUpCards() {
	const [state, setState] = useState();
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		Axios.get("https://covid19.mathdro.id/api/")
			.then(function (response) {
				// handle success
				setState(response.data);
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				//
			});

		return () => {};
	}, []);

	useEffect(() => {
		console.log(state);
	}, [state]);

	if (isLoading) {
		return <p> loading</p>;
	} else {
		return (
			<>
				<Col sm="12" md="6" lg="3">
					<CountUpCard
						start={0}
						end={state.deaths.value}
						header="deaths"
					></CountUpCard>
				</Col>
				<Col sm="12" md="6" lg="3">
					<CountUpCard
						start={0}
						end={state.recovered.value}
						header="recovered"
					></CountUpCard>
				</Col>
				<Col sm="12" md="6" lg="3">
					<CountUpCard
						start={0}
						end={state.confirmed.value}
						header="confirmed"
					></CountUpCard>
				</Col>
				<Col sm="12" md="6" lg="3">
					<CountUpCard
						start={0}
						end={
							state.deaths.value / (state.recovered.value + state.deaths.value)
						}
						// decimal=3
						// olarak ayarla
						// separate ayarla.
						header="Death Rate"
					></CountUpCard>
				</Col>
			</>
		);
	}
}
