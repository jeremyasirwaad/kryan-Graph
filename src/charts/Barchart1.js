import React, { useState } from "react";
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
// import cohortdata from "./cohort.json";
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

	const data2 = [
		{
			name: "LED TV",
			revenue: 31434618
		},
		{
			name: "Mobiles",
			revenue: 78008428
		},
		{
			name: "Accessories",
			revenue: 59155956
		},
		{
			name: "Air Conditioner",
			revenue: 27489656
		},
		{
			name: "Washing Machine",
			revenue: 43474131
		},
		{
			name: "Refrigerator",
			revenue: 20425075
		},
		{
			name: "Utility Appliances",
			revenue: 8712827
		},
		{
			name: "Home Theatre",
			revenue: 7252825
		},
		{
			name: "Mobile Accessories",
			revenue: 8161444
		},
		{
			name: "Kitchen Appliances",
			revenue: 2027737
		}
	];

	const data3 = [
		{
			name: "LED TV",
			revenue: 51434618
		},
		{
			name: "Mobiles",
			revenue: 28008428
		},
		{
			name: "Accessories",
			revenue: 29155956
		},
		{
			name: "Air Conditioner",
			revenue: 17489656
		},
		{
			name: "Washing Machine",
			revenue: 93474131
		},
		{
			name: "Refrigerator",
			revenue: 70425075
		},
		{
			name: "Utility Appliances",
			revenue: 3712827
		},
		{
			name: "Home Theatre",
			revenue: 5252825
		},
		{
			name: "Mobile Accessories",
			revenue: 1161444
		},
		{
			name: "Kitchen Appliances",
			revenue: 8027737
		}
	];

	const [barccolo, setBarccolo] = useState("#1890ff");

	const [rdata, setrdata] = useState(data);
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
			<BarChart width={430} height={220} data={rdata}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" fontSize={"10px"} />
				<YAxis fontSize={"10px"} />
				<Tooltip
					contentStyle={{ color: "black" }}
					itemStyle={{ color: "black" }}
				/>
				{/* <Legend /> */}
				<Bar dataKey="revenue" fill={barccolo} />
			</BarChart>
			{/* </ResponsiveContainer> */}
			<div
				className="buttons"
				style={{
					// marginLeft: "200px",
					width: "430px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					marginTop: "20px"
				}}
			>
				<button
					style={{
						marginLeft: "70px",
						border: "none",
						backgroundColor: "#1890ff",
						color: "white",
						width: "60px",
						height: "25px",
						borderRadius: "2px",
						fontSize: "18px",
						cursor: "pointer"
					}}
					onClick={() => {
						setrdata(data);
						setBarccolo("#1890ff");
					}}
				>
					???
				</button>
				<button
					style={{
						border: "none",
						backgroundColor: "#a0d911",
						color: "black",
						width: "60px",
						height: "25px",
						borderRadius: "2px",
						fontSize: "18px",
						cursor: "pointer"
					}}
					onClick={() => {
						setrdata(data2);
						setBarccolo("#a0d911");
					}}
				>
					%
				</button>
				<button
					style={{
						border: "none",
						backgroundColor: "#ff4d4f",
						color: "white",
						width: "60px",
						height: "25px",
						borderRadius: "2px",
						fontSize: "18px",
						cursor: "pointer"
					}}
					onClick={() => {
						setrdata(data3);
						setBarccolo("#ff4d4f");
					}}
				>
					{" "}
					#
				</button>
			</div>
			
		</div>
	);
};
