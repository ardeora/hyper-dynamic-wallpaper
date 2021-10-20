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

export interface VideoContainerProps {
  video: string;
}

export interface TypedConfig {
  category: string;
}

export interface ImageConfigCategorized extends TypedConfig, ImageConfig {}
export interface VideoConfigCategorized extends TypedConfig, VideoConfig {}

export type CategorizedConfigTypes = ImageConfigCategorized | VideoConfigCategorized;
export type ConfigTypes = ImageConfig | VideoConfig;

export type WallpaperConfigList = CategorizedConfigTypes[];
