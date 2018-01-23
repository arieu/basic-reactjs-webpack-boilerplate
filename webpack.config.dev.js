var path = require('path');
var webpack = require('webpack');

const PUBLIC_DIR = path.join(__dirname, 'public');
const BUILD_DIR = path.join(__dirname, 'public/dist');

module.exports = {
  entry: path.resolve(__dirname,'./src/index.js'),
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/,  use: ['style-loader', 'css-loader'] },
      // images and fonts
      { test: /\.(gif|ttf|eot|svg|woff2?)$/, use: 'url-loader?name=[name].[ext]'},
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'babel-loader' },
        ],
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: BUILD_DIR,
    hot: true,
    open: true,
    openPage: ''
  }
};
