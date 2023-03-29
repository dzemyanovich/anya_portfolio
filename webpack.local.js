const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');

const config = require('./webpack.shared');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist_local'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.AUTH_API': JSON.stringify('https://0wanj4yiyc.execute-api.eu-central-1.amazonaws.com/dev4'),
    }),
  ],
});
