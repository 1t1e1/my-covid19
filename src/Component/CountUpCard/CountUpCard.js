import CountUp from "react-countup";
import React from "react";
import { Card, CardText, CardTitle } from "reactstrap";

export default function CountUpCard({ start, end, header }) {
	return (
		<Card className="border-light text-white bg-info">
			<CardTitle> {header}</CardTitle>
			<CardText className="mb-2">
				<CountUp start={start} end={end} duration={0.75}></CountUp>
			</CardText>
		</Card>
	);
	// return <div>hi form c u</div>;
}
