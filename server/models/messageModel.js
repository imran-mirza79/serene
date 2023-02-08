import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
	sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	content: { type: String, trim: true },
	chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
	timeStamp: {
		type: Date,
		default: new Date(),
	},
});

const MessageModel = mongoose.model(messageSchema);
export default MessageModel;
