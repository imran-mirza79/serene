import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from "body-parser";

import RoomRoutes from './routes/room.js';
import UserRoutes from './routes/user.js';
const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`Server Started on PORT: ${PORT}`);
		app.listen(PORT);
	});

app.use("/room", RoomRoutes);
app.use("/user", UserRoutes);


