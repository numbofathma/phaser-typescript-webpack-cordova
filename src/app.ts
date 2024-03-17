import Phaser from 'phaser-ce';
import PhaserApp from '~/bootstrap';
import { PhaserConfig } from '~config/phaser';
import { GameStates } from '~config/game';

/**
 * @author       Costin Mirica <hi@costinmirica.com>
 * @license      {http://www.costinmirica.com/}
 */

class App {
  private game: PhaserApp;

  constructor(game: Phaser.Game, isCordovaApp: boolean) {
    this.game = game;

    if (isCordovaApp) {
      this.bindEvents();
    } else {
      this.bootGame();
    }
  }

  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    document.addEventListener('backbutton', () => {
      navigator.notification.confirm(
        'Are you sure you want to quit?',
        (buttonIndex: number) => {
          if (buttonIndex === 1) {
            navigator.app.exitApp();
          }
        },
        'Quit application?',
        ['Yes', 'No'],
      );
    });
  }

  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady() {
    // Hide status bar
    window.StatusBar.hide();
    this.bootGame();
  }

  bootGame = () => {
    // Boot and load the magic
    this.game.state.start(GameStates.BOOT);
  };
}

(() => new App(new PhaserApp(PhaserConfig), !!window.cordova))();
