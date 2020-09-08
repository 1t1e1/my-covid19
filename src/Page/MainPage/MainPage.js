import React from "react";
import { Row, Col } from "reactstrap";
import CountUpCards from "../../Component/CountUpCard/CountUpCards";
import WorldMap from "../../Component/WorldMap/WorldMapSVG";

export default function MyComponent(prop) {
	return (
		<>
			<Row className="mb-4">{/* bosluk icin  */}</Row>
			<Row className="text-center ">
				<CountUpCards></CountUpCards>
				<Col sm="12" md="12" lg="12" className="map py-3">
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
