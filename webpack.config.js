const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, "./src/index.js")],

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }],
  },

  devServer: {
      static: path.resolve(__dirname, "public"),
  }
};
