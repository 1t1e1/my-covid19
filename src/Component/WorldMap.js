import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
	title: {
		text: "My chart",
	},
	series: [
		{
			data: [1, 2, 3],
		},
	],
};

const WorldMap = () => (
	<div>
		<HighchartsReact highcharts={Highcharts} options={options} />
	</div>
);

export default WorldMap;
