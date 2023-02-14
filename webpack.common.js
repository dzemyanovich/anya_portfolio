const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    allowedHosts: 'all',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // todo: do we need this loader?
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|j?g|svg|gif|woff|otf)?$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
  ],
  performance: {
    maxEntrypointSize: 358400, // 350 KiB
    maxAssetSize: 358400, // 350 KiB
  },
};
