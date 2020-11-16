import React from "react";
import { Table } from "reactstrap";

import thousands_separators from "../../utils/numberformatter";

const CustomTable = ({ isLoading, data }) => {
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
				{!isLoading &&
					data &&
					data.map((item, index) => {
						return (
							<tr>
								<th scope="row">{index + 1}</th>
								<td> {item.country}</td>
								<td> {thousands_separators(item.confirmedCount, ".")} </td>
								<td> {thousands_separators(item.deathsCount, ".")} </td>
								<td> {thousands_separators(item.recoveredCount, ".")} </td>
							</tr>
						);
					})}
			</tbody>
		</Table>
	);
};

export default CustomTable;
