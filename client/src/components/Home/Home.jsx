import React from "react";
import { useNavigate } from "react-router-dom";
import { createRoom } from "../../actions/room";

const Home = () => {
	const navigate = useNavigate();

	const fakeRoomData = {
		ownedBy: "63d6322514fd515a8799fcdf",
		users: "63d6322514fd515a8799fccf",
		createdAt: Date.now(),
	};

	const handleCreateRoom = (e) => {
		e.preventDefault();

		// createRoom(fakeRoomData, navigate).then((res) => {
		// 	console.log(res);
		// });
		navigate("/room/63e3c1b5b26b07862168f8b6");
	};
	return (
		<div>
			<button onClick={(e)=>handleCreateRoom(e)}>CREATE ROOM</button>
		</div>
	);
};

export default Home;
