const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist_dev'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.AUTH_API': JSON.stringify('https://lxe4b8taqj.execute-api.eu-central-1.amazonaws.com/dev'),
    }),
  ],
});
