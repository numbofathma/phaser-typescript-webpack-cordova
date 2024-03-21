import Phaser from 'phaser-ce';
import { Howl } from 'howler';
import { GameTemplate } from '~/global';
import SoundHelper from '~helpers/sound';
import { GameStates } from '~/config/game';

export class Preload extends Phaser.State {
  private audiosprite: Howl;

  private music: Howl;

  private ready: boolean;

  private soundReady: boolean;

  private musicReady: boolean;

  constructor() {
    super();
    this.ready = false;
  }

  public preload(): void {
    // Load awesome fonts
    this.game.load.bitmapFont('font', 'assets/fonts/font.png', 'assets/fonts/font.xml');

    // Load sprite
    this.game.load.image('mushroom', 'assets/sprites/mushroom.png');

    // Load game SFX
    this.audiosprite = new Howl({
      src: [
        'assets/sounds/button.mp3',
        'assets/sounds/button.ogg',
        'assets/sounds/button.m4a',
      ],
      sprite: {
        button: [
          0,
          456,
        ],
      },
      volume: 1,
      onload: () => {
        this.soundReady = true;
      },
    });

    this.music = new Howl({
      src: [
        'assets/sounds/music.mp3',
        'assets/sounds/music.ogg',
        'assets/sounds/music.m4a',
      ],
      autoplay: true,
      loop: true,
      volume: 1,
      onload: () => {
        this.musicReady = true;
      },
    });

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
  }

  public update() {
    if ((this.ready === true) && (this.musicReady === true) && (this.soundReady === true)) {
      GameTemplate.Sound = new SoundHelper(this.music, this.audiosprite, GameTemplate.volume);

      this.game.state.start(GameStates.GAME, true, false);
    }
  }

  public onLoadComplete() {
    this.ready = true;
  }
}
