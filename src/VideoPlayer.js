import React from 'react';
import videoFile from './video/sinaldivino.mp4';
import videoFile2 from './video/sinaldivino.webm';
import videoFile3 from './video/sinaldivino.ogg';

const VideoPlayer = () => {
  return (
    <div className="video-player" style={{width:'100%'}}>
      <video controls width="100%" height="100%">
        <source src={videoFile} type="video/mp4" />
        <source src={videoFile2} type="video/webm" />
        <source src={videoFile3} type="video/ogg" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );  
};

export default VideoPlayer;