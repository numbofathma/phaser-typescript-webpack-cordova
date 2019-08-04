## 1. Clone this repo:

Navigate into your workspace directory.

Run:

```https://github.com/numbofathma/phaser-typescript-webpack-cordova.git```

## 2. Install node.js and npm:

https://nodejs.org/en/


## 3. Install dependencies:

Navigate to the cloned repo’s directory.

Run:

```npm install``` 

## 4. Run the application in browser:

Run:

```npm run start```

This will run a server so you can see your game in the browser.

Open your browser and enter localhost:8000 into the address bar.

As you change your code, Webpack will watch for changes and the browser will refresh.


## 5. Build for deployment (it will create the www folder for your Cordova application):

Run:

```npm run build```

This will optimize and minimize the compiled bundle. Your code will be minified and uglyfied for reverse engineering protection.
The vendor library will only be minified because uglify will add extra MBs to your game.


## 6. Extra feature (fix your TS code)
I've also added a command that auto-fixes your TS code according to the rules in the tslint.json file.

Run:

``` npm run lint:fix```

## 7. Cordova
Check the <a href='https://cordova.apache.org/docs/en/latest/'>Cordova documentation</a> for adding platforms (android, ios, etc) and plugins.
In the package.json you'll find everything to build your application in debug or release (production) mode. The names of the commands are self explanatory.

Note: If the npm shortcut commands fails, then run the Cordova commands directly, it will show the exact error.

<br />
Made with <3 in Romania 