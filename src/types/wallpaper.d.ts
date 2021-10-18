export interface WallpaperConfig {
  video?: VideoConfig;
  image?: ImageConfig;
}

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

export interface WallpaperComponentProps {
  config: WallpaperConfig;
}

export interface VideoContainerProps {
  video: string;
}
