export interface ImageConfig {
  source: string;
  position?: string;
  repeat?: string;
  size?: string;
  color?: string;
}

export interface VideoConfig {
  source: string;
  speed?: number;
}

export interface GradientConfig {
  colors: string[];
  gradientAngle?: number;
  animationTime?: number;
  timingFunction?: string;
}

export interface SolidColorConfig {
  color: string;
}

export interface WallpaperConfig {
  video?: VideoConfig | VideoConfig[];
  image?: ImageConfig | ImageConfig[];
}

export interface HOCState {
  configList: WallpaperConfigList;
  configIdx: number;
}

export interface HOCProps {
  hyperWallpaper: WallpaperConfig;
}

export interface WallpaperComponentProps {
  config: CategorizedConfigTypes;
}

export interface TypedConfig {
  category: string;
}

export interface ImageConfigCategorized extends TypedConfig, ImageConfig {}
export interface VideoConfigCategorized extends TypedConfig, VideoConfig {}
export interface GradientConfigCategorized extends TypedConfig, GradientConfig {}
export interface SolidColorConfigCategorized extends TypedConfig, SolidColorConfig {}

export type CategorizedConfigTypes =
  | ImageConfigCategorized
  | VideoConfigCategorized
  | GradientConfigCategorized
  | SolidColorConfigCategorized;
export type ConfigTypes = ImageConfig | VideoConfig | GradientConfig | SolidColorConfig;

export type WallpaperConfigList = CategorizedConfigTypes[];
