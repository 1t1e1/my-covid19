import React from "react";
import { Table } from "reactstrap";

import thousands_separators from "../../utils/numberformatter";

import "../../App.css";

const CustomTable = ({ isLoading, data }) => {
	return (
		<Table dark className="mybackground">
			<thead>
				<tr>
					<th>#</th>
					<th>Countries</th>
					<th>Confirmed</th>
					<th>Deaths</th>
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
							</tr>
						);
					})}
			</tbody>
		</Table>
	);
};

export default CustomTable;
