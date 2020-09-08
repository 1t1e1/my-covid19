import CountUp from "react-countup";
import React from "react";
import { Card, CardText, CardTitle } from "reactstrap";

export default function CountUpCard({
	start,
	end,
	header,
	decimals = 0,
	prefix,
}) {
	return (
		<Card className="border-light text-white bg-info">
			<CardTitle className="text-uppercase"> {header}</CardTitle>
			<CardText className="mb-2">
				<CountUp
					start={start}
					end={end}
					duration={0.75}
					decimals={decimals}
					prefix={prefix}
					separator="."
					decimal=","
				></CountUp>
			</CardText>
		</Card>
	);
	// return <div>hi form c u</div>;
}
