import Phaser from 'phaser-ce';

export const enum AppPlatformType {
  IOS = 'ios',
  ANDROID = 'android',
}

export const PhaserConfig: Phaser.IGameConfig = {
  width: 480,
  height: 800,
  enableDebug: false,
  renderer: Phaser.CANVAS,
  antialias: true,
  backgroundColor: '#000000',
};
