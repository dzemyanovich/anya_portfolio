const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');

const config = require('./webpack.shared');

module.exports = merge(config, {
  mode: 'production',
  devtool: false,
  devServer: {
    hot: false,
    liveReload: false,
    webSocketServer: false,
  },
  output: {
    path: path.resolve(__dirname, 'dist_dev'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.AUTH_API': JSON.stringify('https://0wanj4yiyc.execute-api.eu-central-1.amazonaws.com/dev4'),
    }),
  ],
});
