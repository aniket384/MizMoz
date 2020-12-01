import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, messages, shares }) {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            <video className="video__player"ref={videoRef} onClick={handleVideoPress}  loop src={url}></video>
       
        </div>
    )
}

export default Video
