const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  entry: {
    app: ['./src/index.tsx']
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    publicPath: '/'
  },
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
    modules: [path.resolve('./node_modules'), path.resolve('./src')]
  }
});
