import {
  CategorizedConfigTypes,
  ConfigTypes,
  GradientConfigCategorized,
  WallpaperConfig,
  WallpaperConfigList,
} from '../types/wallpaper';
import { css, keyframes } from '@emotion/css';

export type SourceType = 'URL' | 'Local';

export function isStrUrl(str: string): boolean {
  return /^(http:\/\/|https:\/\/)/.test(str);
}

export function flattenConfig(config: WallpaperConfig): WallpaperConfigList {
  let configList: WallpaperConfigList = [];

  for (const key in config) {
    if (Array.isArray(config[key])) {
      const categorizedConfigs = applyCategories(config[key], key);
      configList = [...configList, ...categorizedConfigs];
      continue;
    }
    configList.push(applyCategory(config[key], key));
  }

  return configList;
}

function applyCategories(arr: ConfigTypes[], category: string): CategorizedConfigTypes[] {
  const list: CategorizedConfigTypes[] = [];
  for (const item of arr) {
    list.push(applyCategory(item, category));
  }
  return list;
}

function applyCategory(obj: ConfigTypes, category: string): CategorizedConfigTypes {
  return { ...obj, category };
}

export function getGradientCSS(config: GradientConfigCategorized) {
  const gradientAnimation = keyframes`
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
  `;

  const gradientCSS = css`
    background: linear-gradient(${getGradientAngle(config.gradientAngle)}deg, ${getGradientColors(config.colors)});
    background-size: ${getGradientBgSize(config.colors)};
    animation: ${gradientAnimation} ${config.animationTime ? config.animationTime : 0}s
      ${config.timingFunction ? config.timingFunction : 'linear'} infinite;
  `;

  return gradientCSS;
}

function getGradientAngle(angle?: number) {
  if (angle && angle >= 0) return angle;
  else return 270;
}

function getGradientColors(colors?: string[]) {
  if (colors && colors.length > 0) {
    return colors.join(', ');
  }
  return '#000000';
}

function getGradientBgSize(colors?: string[]) {
  if (colors && colors.length > 0) {
    const size = colors.length;
    return `${size}00% ${size}00%`;
  }
  return '100% 100%';
}
