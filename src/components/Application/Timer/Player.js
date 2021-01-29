import React from "react";
import "./Player.scss";
import ReactPlayer from "react-player";
import {FaCompactDisc, FaForward, FaBackward } from "react-icons/fa"

export default function Player ({currentSongIndex,
    isRunning,setCurrentSongIndex,songs, setLibraryStatus, libraryStatus}) {
    


    const skipSong = async (forward = true) => {
      
    if (forward) {
        await setCurrentSongIndex((currentSongIndex + 1) % songs.length);
        // activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
      }
      else  {
        if ((currentSongIndex - 1) % songs.length === -1) {
          await setCurrentSongIndex(songs.length - 1);
        //   activeLibraryHandler(songs[songs.length - 1]);
          return;
        } else {
        await setCurrentSongIndex((currentSongIndex- 1) % songs.length);
        }

      }
    };





    return(
        <div className="player">
            <h3>WYBIERZ MUZYKĘ DO MEDTACJI</h3>
            <h5>Wybrana ścieżka:</h5>
            <span className="current-track">{songs[currentSongIndex].title}</span>
            
            <div className="player-wrapper">
            <ReactPlayer
                url={songs[currentSongIndex].src}
                className="react-player"
                height="60px"
                width="200px"
                playing={isRunning ? true : false}
                controls={false}
                />
                </div>
            <div className="controls">
                <FaBackward className="control-icon" onClick={() => skipSong(false)}/>
                <FaCompactDisc onClick={() => setLibraryStatus(!libraryStatus)} className="control-icon"/>
                <FaForward className="control-icon" onClick={() => skipSong()}/>
            </div>

        </div>
    )
}