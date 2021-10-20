import React, { FC, useEffect, useRef } from 'react';
import { VideoConfigCategorized } from '../types/wallpaper';
import { isStrUrl } from '../utils/util';

const VideoContainer: FC<VideoConfigCategorized> = (config) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && config.speed) {
      videoRef.current.playbackRate = config.speed < 0 ? 0 : config.speed;
    }
  });

  return (
    <video
      ref={videoRef}
      style={{
        objectFit: 'cover',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
      autoPlay
      loop
      muted={true}
      key={config.source}
    >
      <source src={isStrUrl(config.source) ? config.source : `file://${config.source}`} />
    </video>
  );
};

export default VideoContainer;
