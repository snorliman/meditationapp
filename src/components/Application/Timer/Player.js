import React, { useState, useEffect, useRef } from React;
import { FaFileAudio, FaForward, FaBackward } from "react-icons/fa"

export default function Player ({currentSongIndex,
    isRunning,setCurrentSongIndex,nextSongIndex,songs}) {
    const audioEl = useRef(null);

    useEffect(() => {
        if(isRunning) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    })

    const skipSong = (forward = true) => {
        if(forward) {
        setCurrentSongIndex(() => {
            let temp = currentSongIndex;
            temp ++;
            if( temp > songs.lenght -1) {
                temp = 0;
            }
            return temp;
        }) 
    } else {
        setCurrentSongIndex(() => {
            let temp = currentSongIndex;
            temp --;
            if( temp < 0) {
                temp = songs.lenght - 1;
            }
            return temp;
        })
    }
    }
    return(
        <div>
            <h3>WYBIERZ MUZYKĘ DO MEDTACJI</h3>
            <span>{songs[currentSongIndex].title}</span>
            <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
            <FaBackward onClick={() => skipSong(false)}/>
            <FaFileAudio/>
            <FaForward onClick={() => skipSong()}/>

        </div>
    )
}