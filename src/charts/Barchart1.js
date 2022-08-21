import React from "react";
import {
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Bar,
	ResponsiveContainer
} from "recharts";



export const Barchart1 = () => {
	const data = [
		{
			name: "LED TV",
			revenue: 61434618
		},
		{
			name: "Mobiles",
			revenue: 58008428
		},
		{
			name: "Accessories",
			revenue: 19155956
		},
		{
			name: "Air Conditioner",
			revenue: 17489656
		},
		{
			name: "Washing Machine",
			revenue: 13474131
		},
		{
			name: "Refrigerator",
			revenue: 10425075
		},
		{
			name: "Utility Appliances",
			revenue: 9712827
		},
		{
			name: "Home Theatre",
			revenue: 6252825
		},
		{
			name: "Mobile Accessories",
			revenue: 6161444
		},
		{
			name: "Kitchen Appliances",
			revenue: 5027737
		}
	];

	return (
		<div
			style={{
				padding: "40px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
				alignItems: "flex-start"
			}}
		>
			<span style={{ marginBottom: "20px" }}>
				Revenue distribution by all customers
			</span>
			{/* <ResponsiveContainer height={"500px"} width={"650px"}> */}
			<BarChart width={430} height={220} data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" fontSize={"10px"} />
				<YAxis fontSize={"10px"} />
				<Tooltip
					contentStyle={{ color: "black" }}
					itemStyle={{ color: "black" }}
				/>
				{/* <Legend /> */}
				<Bar dataKey="revenue" fill="#fadb14" />
			</BarChart>
			{/* </ResponsiveContainer> */}
		</div>
	);
};
