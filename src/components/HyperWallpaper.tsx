import React, { FC } from 'react';
import { WallpaperComponentProps } from '../types/wallpaper';
import VideoContainer from './VideoContainer';
import ImageContainer from './ImageContainer';

const HyperWallpaper: FC<WallpaperComponentProps> = ({ config }) => {
  return (
    <div
      style={{
        position: 'absolute',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        background: 'black',
        pointerEvents: 'none',
      }}
    >
      {config.category == 'video' ? <VideoContainer {...config} /> : null}
      {config.category == 'image' ? <ImageContainer {...config} /> : null}
    </div>
  );
};

export default HyperWallpaper;
