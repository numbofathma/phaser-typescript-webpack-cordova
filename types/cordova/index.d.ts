/// <reference types="cordova" />
/// <reference types="cordova-plugin-inappbrowser"/>
/// <reference types="cordova-plugin-statusbar"/>
/// <reference types="cordova-plugin-splashscreen"/>
/// <reference types="cordova-plugin-dialogs"/>
/// <reference types="cordova-plugin-app-exit" />
/// <reference types="phaser-ce/typescript/phaser" />
/// <reference types="phaser-ce/typescript/pixi" />
/// <reference types="phaser-ce/typescript/p2" />

interface Window {
  cordova: any;
}

interface Navigator {
  app: {
    exitApp: () => void
  };
}
