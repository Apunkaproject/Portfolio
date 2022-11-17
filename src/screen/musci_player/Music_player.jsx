
import 'react-h5-audio-player/lib/styles.css';
import "./AudioPlayer.css";
import hanumanChalisha from "./Ram_siya.mp3";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import React, { useState, useRef } from 'react';
function MusicPlayer() {
    const [percentage, setPercentage] = useState(0);
    const [isPlaying, setisPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setcurrentTime] = useState(0);
    const audioRef = useRef();

    const onChange = (e) => {
        setPercentage(e.target.value);
    }

    const play = () => {
        const audio = audioRef.current;
        audio.volume = 0.5;
        if (!isPlaying) {
            setisPlaying(true);
            audio.play();
        }
        if (isPlaying) {
            setisPlaying(false);
            audio.pause();
        }
    }
    return (
        <>
            <div className="music-player">
                {/* <h1>Player</h1> */}
                {/* <Slider defaultValue={0}  /> */}
                <audio src={hanumanChalisha} ref={audioRef} onLoadedData={(e) => {
                    console.log(e.currentTarget.duration);
                    setDuration(e.currentTarget.duration.toFixed(2));
                }}
                    onTimeUpdate={(e) => {
                        console.log(e.currentTarget.currentTime);
                        setcurrentTime(e.currentTarget.currentTime);
                    }}
                ></audio>
         <button onClick={play} className="music-button">
                <Player
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/packages/lf20_hmr4edvr.json"
                    style={{ height: '60px', width: '60px' }}
                    >
                </Player>
         </button>
            </div>
        </>
    )
}

export default MusicPlayer;