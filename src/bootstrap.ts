import Phaser from 'phaser-ce';
import { GameStates } from '~config/game';
import { GameTemplate } from '~/global';
import { Boot } from '~states/boot';
import { Preload } from '~states/preload';
import { Game } from '~states/game';

/**
 * @author       Costin Mirica <hi@costinmirica.com>
 * @license      {http://www.costinmirica.com/}
 */

class PhaserApp extends Phaser.Game {
  constructor({
    width,
    height,
    renderer,
    antialias,
    enableDebug,
  }: Phaser.IGameConfig) {
    const config = {
      width,
      height,
      renderer,
      antialias,
      parent: 'content',
      state: null,
      enableDebug,
    };

    super(config);

    GameTemplate.isCordovaApp = !!window.cordova;
    GameTemplate.globalscore = (localStorage.getItem('globalscore') == null) ? 0 : window.localStorage.getItem('globalscore');
    GameTemplate.record = (localStorage.getItem('record') == null) ? 0 : parseInt(localStorage.getItem('record') || '0', 10);
    GameTemplate.volume = (localStorage.getItem('volume') == null) ? 1 : parseInt(localStorage.getItem('volume') || '0', 10);

    this.state.add(GameStates.BOOT, Boot, false);
    this.state.add(GameStates.PRELOAD, Preload, false);
    this.state.add(GameStates.GAME, Game, false);
  }
}

export default PhaserApp;
