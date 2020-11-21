const path = require('path')
const SRC_DIR = path.join(__dirname, '/Client/src')
const DIST_DIR = path.join(__dirname, '/Client/dist')

console.log(SRC_DIR);
console.log(DIST_DIR);

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: DIST_DIR
  }
};