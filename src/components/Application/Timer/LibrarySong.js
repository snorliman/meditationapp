import React from "react";

const LibrarySong = ({song, setCurrentSongIndex, songs, id, setLibraryStatus }) => {

    const songSelectHandler = (id) => {
        const selectedSong = songs.findIndex(song => song.id === id);
        setCurrentSongIndex(selectedSong);
        setLibraryStatus(false)

    }
    return (
        <div onClick={() => songSelectHandler(id)} key={song.id} className="library-song">
            <h3>{song.title}</h3>
        </div>
    )
}
export default LibrarySong;