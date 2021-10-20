import { CategorizedConfigTypes, ConfigTypes, WallpaperConfig, WallpaperConfigList } from '../types/wallpaper';

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
