import 'pixi';
import 'p2';
import 'phaser';

import {Config} from './config';

import {Boot} from './states/boot';
import {Preload} from './states/preload';
import {Game} from './states/game';

class Template extends Phaser.Game {
    constructor() {
        super(Config.gameWidth, Config.gameHeight, Phaser.CANVAS, 'content', null);

        this.state.add('Boot', Boot, false);
        this.state.add('Preload', Preload, false);
        this.state.add('Game', Game, false);

        this.state.start('Boot');
    }
}

const resize = () => {
    const canvas = document.querySelector('canvas');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const windowRatio = windowWidth / windowHeight;
    const gameRatio = Config.gameWidth / Config.gameHeight;
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + 'px';
        canvas.style.height = windowWidth / gameRatio + 'px';
    } else {
        canvas.style.width = windowHeight * gameRatio + 'px';
        canvas.style.height = windowHeight + 'px';
    }
};

window.onload = () => {
    resize();
    window.addEventListener('resize', resize, false);
};

// @ts-ignore
const isCordovaApp = !!window.cordova;
const cordovaApp = {
    // Application Constructor
    initialize: function() {
        if (isCordovaApp) {
            this.bindEvents();
        }
        else {
            this.onDeviceReady();
        }
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        new Template();
    },
};

cordovaApp.initialize();