const path = require("path");

module.exports = {
  //entry: ["@babel/polyfill", "./src/main.js"],
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
    ],
  },
};
