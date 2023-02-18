import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
	// Owned By indicates the admins of the room.
	// All the access rights will be given to admins as of now.
	// Later on, we need to make a new field for all the access
	// TODO: Add access Rights
	ownedBy: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
		},
	],

	users: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
		},
	],

	playlistId: {type: mongoose.Schema.Types.ObjectId, ref:"Playlist"},

	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const RoomModel = mongoose.model("Rooms", roomSchema);
export default RoomModel;