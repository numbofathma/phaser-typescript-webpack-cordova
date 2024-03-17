import { Howl } from 'howler';

export default class SoundHelper {
  private music: Howl;

  private audiosprite: Howl;

  private volume: number;

  constructor(music: Howl, audiosprite: Howl, volume: number) {
    this.music = music;
    this.audiosprite = audiosprite;
    this.volume = volume;
  }

  public setVolume = (volume: number): void => {
    this.volume = volume;
  };

  public playMusic = (): void => {
    if ((this.volume === 1) && (!this.music.playing())) {
      this.music.play();
    }
  };

  public stopMusic = (): void => {
    if (this.volume === 1) {
      this.music.stop();
    }
  };

  public playSound = (key: string) => {
    if (this.volume === 1) {
      this.audiosprite.play(key);
    }
  };
}
