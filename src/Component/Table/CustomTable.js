import React from "react";
import { Table } from "reactstrap";

import thousands_separators from "../../utils/numberformatter";

const CustomTable = ({ isLoading, isError, data }) => {
	if (isLoading) {
		return <div>loading table</div>;
	}
	if (isError) {
		return <div> There is error in Store or API </div>;
	}
	const dataEdited =
		data &&
		data.filter(
			(country) =>
				country.confirmedCount + country.deathsCount + country.recoveredCount >
				150
		);

	return (
		<Table dark hover responsive>
			<thead>
				<tr>
					<th>#</th>
					<th>COUNTRIES</th>
					<th>CONFIRMED</th>
					<th>DEATHS</th>
					<th>RECOVERED</th>
				</tr>
			</thead>
			<tbody>
				{data &&
					dataEdited.map((item, index) => {
						return (
							<tr key={item.country}>
								<th scope="row">{index + 1}</th>
								<td>{item.country}</td>
								<td>{thousands_separators(item.confirmedCount, ".")}</td>
								<td>{thousands_separators(item.deathsCount, ".")}</td>
								<td>{thousands_separators(item.recoveredCount, ".")}</td>
							</tr>
						);
					})}
			</tbody>
		</Table>
	);
};

export default CustomTable;
