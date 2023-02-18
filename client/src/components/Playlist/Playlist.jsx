import React, { useContext, useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import SocketContext from "../../context/SocketContext";

const Playlist = () => {
	const [songURL, setSongURL] = useState("");
	const { socket } = useContext(SocketContext);
    const [ songs, setSongs ] = useState([]);
    // const [ currentPlayList, setCurrentPlayList ] = useState(songs);
    const [ currentSongIndex, setCurrentSongIndex ] = useState(0);
    
    const handleClickNext = () => {
        setCurrentSongIndex((currentSongIndex) =>
			currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0
		);
    }

    const handleEnd = () => {
		console.log("end");
		setCurrentSongIndex((currentSongIndex) =>
			currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0
		);
	};

	useEffect(() => {
		if (!socket) return;
		socket.on("playlist-updated", (data) => {
            setSongs((prev) => [ ...prev, data.songURL ]);
            // setCurrentPlayList(())
            
		});
	}, [socket]);
	const handleSongSubmit = (e) => {
		e.preventDefault();
		socket.emit("add-song", { songURL });
	};
	return (
		<div>
			<input
				type="text"
				aria-label="Song URL"
				onChange={(e) => setSongURL(e.target.value)}
			/>
			<button type="submit" onClick={handleSongSubmit}>
				Add Song
			</button>

			<h1>LIST OF SONGS</h1>
			<ul>
				{songs.map((song) => (
					<li key={song}>{song}</li>
				))}
			</ul>
			<AudioPlayer
				volume="0.5"
				src={songs[currentSongIndex]}
				showSkipControls
				onClickNext={handleClickNext}
				onEnded={handleEnd}
			/>
		</div>
	);
};

export default Playlist;
