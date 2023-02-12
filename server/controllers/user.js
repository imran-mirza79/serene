import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

export const registerUser = async (req, res) => {
	const { body: userDetails } = req;
	try {
		const user = await UserModel.create(userDetails);
		res.json(user);
	} catch (error) {
		res.sendStatus(500).json(error.message);
	}
};

export const signIn = async (req, res) => {
	const { email, password } = req;
	try {
		const existingUser = UserModel.findOne({ email });
		if (!existingUser) {
			res.sendStatus(404).json({ message: "User does not exist." });
        }
        const checkPassword = await bcrypt.compare(password, existingUser.password);
        if (!checkPassword) {
            res.sendStatus(404).json({ message: "Invalid Credentials" });
        }
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "serene", { expiresIn: "2hr" });
        res.sendStatus(200).json({ result: existingUser, token });
	} catch (error) {
		res.sendStatus(500).json({message:"Internal Server Error."});
	}
};
