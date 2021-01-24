import React, { useState, useEffect } from "react";
import "./Library.scss";
import { musicLibrary } from "../../../utils/musicData";
import Player from "./Player";

const Library = ({isRunning}) => {
const [songs, setSongs] = useState(musicLibrary);
const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

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
        <div className="library">
            <ul>
                {songs.map(song => {
                    return <li key={song.src}>TYTUŁ UTWORU: {song.title}</li>
                })}
            </ul>
            <Player 
                currentSongIndex={currentSongIndex}
                isRunning={isRunning}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
                />

        </div>
    )
};
export default Library;