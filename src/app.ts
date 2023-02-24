import Phaser from 'phaser-ce';
import { Config } from './config';
import { Boot } from './states/boot';
import { Preload } from './states/preload';
import { Game } from './states/game';

class Template extends Phaser.Game {
  constructor() {
    const config = {
      width: Config.gameWidth,
      height: Config.gameHeight,
      renderer: Config.renderer,
      parent: 'content',
      state: null,
      enableDebug: Config.enableDebug,
    };

    super(config);

    this.state.add('Boot', Boot, false);
    this.state.add('Preload', Preload, false);
    this.state.add('Game', Game, false);
  }
}

const isCordovaApp = !!window.cordova;

const cordovaApp = {
  // Application Constructor
  initialize() {
    if (isCordovaApp) {
      this.bindEvents();
    } else {
      this.bootGame();
    }
  },
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
        'Quit Game?',
        ['Yes', 'No'],
      );
    });
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady() {
    // Hide status bar
    window.StatusBar.hide();
    // Use in app browser to navigate to an URL
    window.cordova.InAppBrowser.open('https://costinmirica.com', '_blank');
    this.bootGame();
  },
  bootGame() {
    const template = new Template();
    template.state.start('Boot');
  },
};

cordovaApp.initialize();
