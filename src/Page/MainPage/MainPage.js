import React from "react";
import { Row, Col } from "reactstrap";
import CountUp from "react-countup";

export default function MyComponent(prop) {
	return (
		<>
			<Row className="text-center">
				<Col sm="12" md="6" lg="3">
					<CountUp
						start={0}
						end={160527}
						duration={1.75}
						separator=" "
					></CountUp>
				</Col>
				<Col sm="12" md="6" lg="3">
					<CountUp
						start={0}
						end={160527}
						duration={1.75}
						separator=" "
					></CountUp>
				</Col>
				<Col sm="12" md="6" lg="3">
					<CountUp
						start={0}
						end={160527}
						duration={1.75}
						separator=" "
					></CountUp>
				</Col>
				<Col sm="12" md="6" lg="3">
					<CountUp
						start={0}
						end={160527}
						duration={1.75}
						separator=" "
					></CountUp>
				</Col>
				<Col sm="12" md="12" lg="12" className="map">
					<p> MAP</p>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col>
					{" "}
					<hr></hr>{" "}
				</Col>{" "}
			</Row>
			<Row>
				{new Array(10).fill().map((item) => {
					return (
						<Col sm="12" md="12" lg="12" className="list-item">
							<p>list</p>
						</Col>
					);
				})}
			</Row>
			<Row> {prop.children} </Row>
		</>
	);
}
