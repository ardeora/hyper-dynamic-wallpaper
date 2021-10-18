export type SourceType = 'URL' | 'Local';

export function isStrUrl(str: string): boolean {
  return /^(http:\/\/|https:\/\/)/.test(str);
}
