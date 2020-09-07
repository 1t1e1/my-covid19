import React from "react";
import { Row, Col } from "reactstrap";
import CountUpCard from "../../Component/CountUpCard";
import WorldMap from "../../Component/WorldMap";

export default function MyComponent(prop) {
	return (
		<>
			<Row className="mb-4"></Row>
			<Row className="text-center ">
				<Col sm="12" md="6" lg="3">
					<CountUpCard start={0} end={160527} header="the title "></CountUpCard>
				</Col>
				<Col sm="12" md="6" lg="3">
					<CountUpCard start={0} end={372184} header="header"></CountUpCard>
				</Col>
				<Col sm="12" md="6" lg="3">
					<CountUpCard start={0} end={2814} header="confirmed"></CountUpCard>
				</Col>
				<Col sm="12" md="6" lg="3">
					<CountUpCard start={0} end={14821} header="death"></CountUpCard>
				</Col>
				<Col sm="12" md="12" lg="12" className="map">
					<WorldMap></WorldMap>
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
