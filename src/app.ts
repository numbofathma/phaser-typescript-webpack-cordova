/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import 'pixi';
import 'p2';
import Phaser from 'phaser-ce';

import { Config } from './config';

import { Boot } from './states/boot';
import { Preload } from './states/preload';
import { Game } from './states/game';

class Template extends Phaser.Game {
  constructor() {
    super(Config.gameWidth, Config.gameHeight, Phaser.CANVAS, 'content', null);

    this.state.add('Boot', Boot, false);
    this.state.add('Preload', Preload, false);
    this.state.add('Game', Game, false);

    this.state.start('Boot');
  }
}

// @ts-ignore
const isCordovaApp = !!window.cordova;
console.log(isCordovaApp);
const cordovaApp = {
  // Application Constructor
  initialize() {
    if (isCordovaApp) {
      console.log('bindEvents');
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
      // @ts-ignore
      navigator.notification.confirm(
        'Are you sure you want to quit?',
        (buttonIndex: number) => {
          if (buttonIndex === 1) {
            // @ts-ignore
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
    // @ts-ignore
    // eslint-disable-next-line no-undef
    StatusBar.hide(); // Hide status bar
    // @ts-ignore
    // eslint-disable-next-line no-undef
    window.open = cordova.InAppBrowser.open;
    // Use window.open('https://www.google.com', '_blank', 'usewkwebview=yes') to use the new WKWebView Engine
    this.bootGame();
  },
  bootGame() {
    console.log('bootGame');
    // eslint-disable-next-line no-new
    new Template();
  },
};

cordovaApp.initialize();
