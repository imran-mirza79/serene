import PlaylistModel from "../models/playlistModel";

export const addSong = async (req, res) => {
    const { body: songURL } = req;
    const roomID = req.params.id;
    try {
        const existingPlaylist = await PlaylistModel.findOne({ roomID });
        if (existingPlaylist) {
            const updatedPlaylist = await PlaylistModel.findOneAndUpdate({ roomID }, { songs: existingPlaylist.songs.push(songURL) });
            res.sendStatus(200).json({ result: updatedPlaylist });
        } else {
            // create a new Playlist
        }
    } catch (error) {
        res.sendStatus(500).json({ result: "Interval Server Error" });
    }
};

export const getSongs = async (req, res) => {
    const roomID = req.params.id;
    try {
        const playlist = await PlaylistModel.findOne({ roomID });
        res.sendStatus(200).json({ result: playlist });
    } catch (error) {
        res.sendStatus(500).json({ result: "Internal Server Error" });
    }
};

