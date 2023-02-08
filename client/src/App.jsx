import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Room from "./components/Room/Room";

const App = () => {
	return (
		<BrowserRouter basename="/">
			<Routes>
				<Route path="/" exact element={<Home/>} />
				<Route path="/room/:id" exact element={<Room/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
