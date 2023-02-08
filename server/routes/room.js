import express from 'express';
import { createRoom } from '../controllers/room.js';

const router = express.Router();

router.post("/createRoom", createRoom);

export default router;