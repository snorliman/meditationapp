import React from "react";

const LibrarySong = ({song, setCurrentSongIndex, songs, id}) => {

    const songSelectHandler = () => {
        const selectedSong = songs.filter(song => song.id === id)
        setCurrentSongIndex(selectedSong[0])
    }
    return (
        <div onClick={() => songSelectHandler()} key={song.id} className="library-song">
            <h3>{song.title}</h3>
        </div>
    )
}
export default LibrarySong;