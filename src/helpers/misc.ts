import { GameTemplate } from '~/global';

export const padNumbers = (n: number, width: number, z?: string): string => {
  const mask = new Array(5);
  const numOfZeros = z || '0';
  const score = `${n}`;

  mask.length = width - score.length + 1;

  return score.length >= width ? score : mask.join(numOfZeros) + score;
};

export const openURL = (url: string, target?: string, options?: string): void => {
  if (GameTemplate.isCordovaApp) {
    window.cordova.InAppBrowser.open(url, target, options);
  }

  window.open(url, target, options);
};
