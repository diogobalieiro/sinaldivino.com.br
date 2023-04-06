import React from 'react';
import videoFile from './video/sinaldivino.mp4';

const VideoPlayer = () => {
  return (
    <div className="video-player" style={{width:'100%'}}>
      <video controls width="100%" height="100%">
        <source src={videoFile} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );  
};

export default VideoPlayer;