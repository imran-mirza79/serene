import mongoose from "mongoose";

const playlistSchema = mongoose.Schema({
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Rooms" },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    songs: [ String ],
    currentSong: Integer,
});

const PlaylistModel = mongoose.model("Playlist", playlistSchema);
export default PlaylistModel;