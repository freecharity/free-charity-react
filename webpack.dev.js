const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  entry: {
    app: ['./src/index.tsx']
  },
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    port: 8080,
    historyApiFallback: true,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    modules: [path.resolve('./node_modules'), path.resolve('./src')]
  }
});
