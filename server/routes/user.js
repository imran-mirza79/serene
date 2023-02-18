import express from 'express';
import {registerUser, signIn} from '../controllers/user.js';
const router = express.Router();

router.route("/register", registerUser)
router.route("/signIn", signIn);

export default router;