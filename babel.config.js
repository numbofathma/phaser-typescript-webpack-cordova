module.exports = {
  presets: ["@babel/preset-typescript"],
  plugins: [
    ["module-resolver", {
      "root": ["./"],
      "alias": {
        "~": "./src",
        "~config": "./src/config",
        "~helpers": "./src/helpers",
        "~states": "./src/states",
        "~prefabs": "./src/prefabs",
        "~plugins": "./src/plugins",
        "~interfaces": "./src/interfaces",
      }
    }]
  ],
};
