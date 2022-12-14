import logo from "./logo.svg";
import "./App.css";
import { Barchart1 } from "./charts/Barchart1";
import { Landing } from "./Landing";
import { Cohortchart } from "./charts/Cohortchart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing></Landing>}></Route>
					<Route path="/barchart1" element={<Barchart1 />}></Route>
					<Route path="/cohort" element={<Cohortchart></Cohortchart>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
