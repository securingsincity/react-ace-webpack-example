var path = require('path');
var webpack = require('webpack');
module.exports = {
  cache: true,
  entry: './src/scripts/main.jsx',
  output: {
    path: path.join(__dirname, 'dist', 'scripts'),
    publicPath: 'scripts/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader' },
      { test: /\.jsx?/, loader: 'jsx-loader' }
    ]
  },
  plugins: [],
  devServer: {
    contentBase: ['./dist/', './public'],
  },
};
