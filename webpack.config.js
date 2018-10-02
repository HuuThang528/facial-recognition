var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');


module.exports = {
  context: __dirname,
  entry: './project/frontend/src',
  mode: 'development',
  output: {
      path: path.resolve('./project/frontend/static/frontend/'),
      filename: "[name].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      // we pass the output from babel loader to react-hot loader
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ],
  }
}