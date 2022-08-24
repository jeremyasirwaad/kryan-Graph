import React, { useState } from "react";
import ReactCohortGraph from "react-cohort-graph";
import Select from "react-select";

export const Cohortchart = () => {
	const [matter, setMatter] = useState("value");

	const options = [
		{ value: 1, label: "#" },
		{ value: 2, label: "%" },
		{ value: 3, label: "$" }
	];

	const cohortdata = {
		".": {
			"2021-1": [42, 0, 0, 1, 0, 1, 0],
			"2021-2": [176, 3, 0, 1, 1, 0],
			"2021-3": [62, 1, 0, 0, 0],
			"2021-4": [69, 2, 1, 1],
			"2022-1": [242, 8, 0],
			"2022-2": [7766, 119],
			"2022-3": [3315]
		}
	};

	const cohortdata2 = {
		".": {
			"2021-1": [41, 0, 0, 1, 0, 1, 0],
			"2021-2": [176, 3, 0, 1, 1, 0],
			"2021-3": [62, 1, 0, 0, 0],
			"2021-4": [69, 2, 1, 1],
			"2022-1": [242, 8, 0],
			"2022-2": [7766, 119],
			"2022-3": [3315]
		}
	};

	const cohortdata3 = {
		".": {
			"2021-1": [41352005.0, 0, 0, 6960.0, 0, 2750.0, 0],
			"2021-2": [1918997.0, 130590.0, 0, 22350.0, 70794.0, 0],
			"2021-3": [553924.0, 23190.0, 0, 0, 0],
			"2021-4": [1361223.0, 34089.0, 1996.0, 1],
			"2022-1": [3794865.1, 164778.0, 0],
			"2022-2": [212881608.0, 2688314.0],
			"2022-3": [85438514.0]
		}
	};

	return (
		<div>
			<div style={{ width: "250px", margin: "20px" }}>
				<Select
					options={options}
					defaultValue={"#"}
					onChange={(e) => {
						if (e.value == 1) {
							setMatter("value");
						} else if (e.value == 2) {
							setMatter("percent");
							console.log("set");
						} else if (e.value == 3) {
							setMatter("rupee");
						}
					}}
				/>
			</div>
			<div style={{ width: "770px", margin: "20px" }}>
				{matter === "value" && (
					<ReactCohortGraph
						// keyCellColor="#f5222d"
						shadeColor="#f5222d"
						data={cohortdata}
						defaultValueType={"value"}
					></ReactCohortGraph>
				)}

				{/* <div style={{ margin: "40px" }}></div> */}
				{matter === "percent" && (
					<ReactCohortGraph
						// keyCellColor="#f5222d"
						shadeColor="#a0d911"
						data={cohortdata2}
						defaultValueType={"percent"}
					></ReactCohortGraph>
				)}

				{matter === "rupee" && (
					<ReactCohortGraph
						// keyCellColor="#f5222d"
						shadeColor="#1890ff"
						data={cohortdata3}
						defaultValueType={"value"}
					></ReactCohortGraph>
				)}
			</div>
			{/* <button
				onClick={() => {
					// setMatter("percent");
					console.log(matter);
				}}
			></button> */}
		</div>
	);
};
