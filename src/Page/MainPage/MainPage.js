import React from "react";
import { Row, Col } from "reactstrap";
import CountUpCards from "../../Component/CountUpCard/CountUpCards";
import WorldMap from "../../Component/WorldMap/WorldMapSVG";
import CustomTable from "../../Component/Table/CustomTable";
import useFetch from "./useFetch";

export default function MyComponent(prop) {
	// FIXME is url not neccesary?
	const url = `https://covid19.mathdro.id/api/confirmed`;
	const confirmState = useFetch(url);

	return (
		<>
			<Row className="mb-4">{/* bosluk icin  */}</Row>
			<Row className="text-center ">
				<CountUpCards></CountUpCards>
				<Col sm="12" md="12" lg="12" className="map py-3">
					{/* <WorldMap></WorldMap> */}
				</Col>
			</Row>
			<Row>
				{/* <Col sm="12" md="12" lg="12" className="list-item"> */}
				<CustomTable {...confirmState}></CustomTable>
				{/* </Col> */}
			</Row>
			<Row className="mb-4"></Row>
			{/* <JustTable {...confirmState} /> */}
			{/* <JustTable data={data} isLoading={isLoading} isError={isError} /> */}
		</>
	);
}
