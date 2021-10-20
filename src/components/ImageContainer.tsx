import React, { FC } from 'react';
import { ImageConfigCategorized } from '../types/wallpaper';
import { isStrUrl } from '../utils/util';
import { IMAGE_DEFAULTS } from '../utils/defaults';

const ImageContainer: FC<ImageConfigCategorized> = (config) => {
  return (
    <div
      style={{
        position: 'absolute',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        backgroundImage: isStrUrl(config.source) ? `url('${config.source}')` : `url('file://${config.source}')`,
        backgroundRepeat: config.repeat ? config.repeat : IMAGE_DEFAULTS.backgroundRepeat,
        backgroundColor: config.color ? config.color : IMAGE_DEFAULTS.backgroundColor,
        backgroundPosition: config.position ? config.position : IMAGE_DEFAULTS.backgroundPosition,
        backgroundSize: config.size ? config.size : IMAGE_DEFAULTS.backgroundSize,
      }}
    />
  );
};

export default ImageContainer;
