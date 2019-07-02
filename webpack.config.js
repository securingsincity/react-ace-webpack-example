var path = require('path');
var webpack = require('webpack');
module.exports = {
  cache: true,
  entry: './src/scripts/main.tsx',
  output: {
    publicPath: 'scripts/',
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader'] },
      { test: /\.tsx?/, use: ['ts-loader'] }
    ]
  },
  plugins: [],
  devServer: {
    contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'dist')],
    port: 9000,
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"]
  }
};
