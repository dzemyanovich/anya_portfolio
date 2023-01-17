const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

// todo: [MINOR] "yarn prod" results in taking webpack.preprod.js config (have no idea why)
module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  devServer: {
    hot: false,
    liveReload: false,
    webSocketServer: false,
  },
  output: {
    path: path.resolve(__dirname, 'dist_prod'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.AUTH_API': JSON.stringify('https://lxe4b8taqj.execute-api.eu-central-1.amazonaws.com/prod/auth'),
    }),
  ],
});
