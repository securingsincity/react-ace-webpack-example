var path = require('path');

module.exports = {
  cache: true,
  entry: './src/scripts/main.js',
  output: {
    path: path.join(__dirname, 'dist', 'scripts'),
    publicPath: 'scripts/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!sass' },
      { test: /\.js/, loader: 'jsx' },
      { test: /\.jsx/, loader: 'jsx' }
    ]
  },
  plugins: []
};