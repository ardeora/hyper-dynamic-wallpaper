import React, { FC } from 'react';
import { cx } from '@emotion/css';
import { getGradientCSS } from '../utils/util';
import { GradientConfigCategorized } from 'types/wallpaper';

const GradientContainer: FC<GradientConfigCategorized> = (config) => {
  return (
    <div
      style={{
        position: 'absolute',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
      }}
      className={cx(getGradientCSS(config))}
    />
  );
};

export default GradientContainer;
