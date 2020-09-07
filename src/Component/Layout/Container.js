import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function MyComponent(prop) {
	return (
		<Container>
			<Row className="text-center">
				<Col sm="12" md="6" lg="3">
					<span className=" align-middle ">Col 12 a </span>
				</Col>
				<Col sm="12" md="6" lg="3">
					{" "}
					Col 12 b{" "}
				</Col>
				<Col sm="12" md="6" lg="3">
					{" "}
					Col 12 c{" "}
				</Col>
				<Col sm="12" md="6" lg="3">
					{" "}
					Col 12 d{" "}
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
			<Row> {prop.children}| </Row>
		</Container>
	);
}
