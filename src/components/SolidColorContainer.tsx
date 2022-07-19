import React, { FC } from 'react';
import { SolidColorConfigCategorized } from 'types/wallpaper';

const SolidColorContainer: FC<SolidColorConfigCategorized> = (config) => {
  return (
    <div
      style={{
        position: 'absolute',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        backgroundColor: config.color ? config.color : '#000',
        opacity: config.maskAlpha / 10,
      }}
    />
  );
};

export default SolidColorContainer;
