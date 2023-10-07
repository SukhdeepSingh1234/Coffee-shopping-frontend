import React, { useState, useEffect } from 'react';
import '../styles/webcam.css'
function Webcam() {
  const [videoSrc, setVideoSrc] = useState('/video_feed'); // Set the initial source
  useEffect(() => {
    // Dynamically set the video source when the component mounts
    setVideoSrc('/video_feed');
  }, []);
  return (
    <div className='model' >
        <img src={videoSrc} alt='Video Feed' className='video-feed'/>
    </div>
  )
}

export default Webcam
