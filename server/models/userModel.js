import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	timeStamp: {
		type: Date,
		default: new Date(),
	},
	rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rooms" }],
});

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
