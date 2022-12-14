const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

// TODO: delete this temp line
module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
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
        test: /\.jsx?$/,
        use: 'babel-loader',
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
        test: /\.(png|j?g|svg|gif|woff)?$/,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    })
  ],
  performance: {
    maxEntrypointSize: 358400, // 350 KiB
    maxAssetSize: 358400, // 350 KiB
  }
};
