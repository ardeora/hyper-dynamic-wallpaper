import React, { FC } from 'react';
import {
  CategorizedConfigTypes,
  ImageConfigCategorized,
  VideoConfigCategorized,
  GradientConfigCategorized,
  WallpaperComponentProps,
  SolidColorConfigCategorized,
} from '../types/wallpaper';
import VideoContainer from './VideoContainer';
import ImageContainer from './ImageContainer';
import GradientContainer from './GradientContainer';
import SolidColorContainer from './SolidColorContainer';

const parentStyle: React.CSSProperties = {
  position: 'absolute',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  background: 'black',
  pointerEvents: 'none',
};

const getImageContainer = (config: CategorizedConfigTypes) => {
  config = config as ImageConfigCategorized;
  return <ImageContainer {...config} />;
};

const getVideoContainer = (config: CategorizedConfigTypes) => {
  config = config as VideoConfigCategorized;
  return <VideoContainer {...config} />;
};

const getGradientContainer = (config: CategorizedConfigTypes) => {
  config = config as GradientConfigCategorized;
  return <GradientContainer {...config} />;
};

const getSolidColorContainer = (config: CategorizedConfigTypes) => {
  config = config as SolidColorConfigCategorized;
  return <SolidColorContainer {...config} />;
};

const HyperWallpaper: FC<WallpaperComponentProps> = ({ config }) => {
  return (
    <div style={parentStyle}>
      {config?.category === 'video' ? getVideoContainer(config) : null}
      {config?.category === 'image' ? getImageContainer(config) : null}
      {config?.category === 'gradient' ? getGradientContainer(config) : null}
      {config?.category === 'solid' ? getSolidColorContainer(config) : null}
    </div>
  );
};

export default HyperWallpaper;
