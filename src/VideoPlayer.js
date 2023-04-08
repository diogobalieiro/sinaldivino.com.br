import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className="video-player" style={{width:'100%', height:'100%'}}>
      {/* <iframe 
        src="https://player.vimeo.com/video/815784967?h=52b5dbcd85&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
        title="sinaldivino.mp4"
        width="100%"
        height="100%"
        
      ></iframe> */}
      <ReactPlayer
        url="https://vimeo.com/815784967"
        width="100%"
        height="100%"
        controls
      />
    </div>
  );  
};

export default VideoPlayer;