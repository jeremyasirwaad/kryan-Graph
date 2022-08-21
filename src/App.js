import logo from "./logo.svg";
import "./App.css";
import { Barchart1 } from "./charts/Barchart1";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/barchart1" element={<Barchart1 />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
