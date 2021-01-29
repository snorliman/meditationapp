import React, { useState, useEffect, useRef } from "react";
import "./Library.scss";
import { musicList } from "../../../utils/musicData";
import Player from "./Player";
import LibrarySong from "./LibrarySong";

const Library = ({isRunning}) => {
const [songs, setSongs] = useState(musicList);
const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
const [libraryStatus, setLibraryStatus] = useState(false)


useEffect(() => {
 setNextSongIndex(() => {
     if(nextSongIndex + 1 > songs.lenght - 1) {
         return 0;
     } else {
         return nextSongIndex + 1;
     }
 })
}, [currentSongIndex])

    return (
        <div >
            <div className={`library ${libraryStatus ? "active-library": ""}`}>
                {songs.map(song => {
                    return <LibrarySong 
                        key={song.id} 
                        id={song.id}
                        isRunning={isRunning}
                        song={song}
                        songs={songs} 
                        setCurrentSongIndex={setCurrentSongIndex}/>
                })}
            </div>
            <Player 
                currentSongIndex={currentSongIndex}
                isRunning={isRunning}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
                setLibraryStatus={setLibraryStatus}
                libraryStatus={libraryStatus}
                />

        </div>
    )
};
export default Library;