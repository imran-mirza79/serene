import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from "body-parser";

import RoomRoutes from './routes/room.js';
import UserRoutes from './routes/user.js';

import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
app.use("/room", RoomRoutes);
app.use("/user", UserRoutes);

const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: '*',
		methods: [ "GET", "POST" ]
	}
});

io.on("connection", (socket) => {
	console.log(socket.id);
	socket.on('add-song', (data) => {
		console.log("SONG URL RECEIVED", data);
		io.emit('playlist-updated', data);
	});

	socket.on("disconnect", (socket) => {
		console.log("user left");
	});
});


httpServer.listen(PORT);

// mongoose
// 	.connect(process.env.CONNECTION_URL, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => {
// 		console.log(`Server Started on PORT: ${PORT}`);
// 		httpServer.listen(PORT);
// 	});


