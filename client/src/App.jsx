import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Room from "./components/Room/Room";
import { io } from "socket.io-client";
import SocketContext from "./context/SocketContext";

const App = () => {

	const { setSocket } = useContext(SocketContext);

	useEffect(() => {
		setSocket(io("http://localhost:5000/"));
	}, [ setSocket ]);

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
