import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import CountUpCard from "./CountUpCard";
import Axios from "axios";

export default function CountUpCards() {
	const [state, setState] = useState();
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		Axios.get("https://covid19.mathdro.id/api/")
			.then(function (response) {
				// setState(response.data);
				console.log(response.data);
				setData([
					{
						header: "deaths",
						end: response.data.deaths.value,
					},
					{
						header: "recovered",
						end: response.data.recovered.value,
					},
					{
						end: response.data.confirmed.value,
						header: "confirmed",
					},
				]);
				// setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log("err happend");
				console.log(error);
			})
			.then(function () {
				//
			});

		return () => {};
	}, []);

	useEffect(() => {
		console.log("this is data");
		console.log(data);
		console.log("this is data");
	}, [isLoading]);

	if (isLoading) {
		return <p> loading</p>;
	} else {
		return (
			<>
				{data.map((item) => (
					<Col sm="12" md="6" lg="3">
						<CountUpCard
							start={0}
							end={item.end}
							header={item.header}
						></CountUpCard>
					</Col>
				))}
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
							(100 * state.deaths.value) /
							(state.recovered.value + state.deaths.value)
						}
						// decimal=3
						// olarak ayarla
						// separate ayarla.
						header="Death Rate"
						decimals={2}
						prefix="%"
					></CountUpCard>
				</Col>
			</>
		);
	}
}
