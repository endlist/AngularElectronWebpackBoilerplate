var _ = require('lodash');
var path = require('path');
var baseConfig = require('./webpack.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = _.extend({}, baseConfig, {
  entry: path.resolve(__dirname, '../app/main.js'),
  alias: {
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test Application',
      template: 'app/index.ejs',
      filename: 'index.html'
    })
  ]
});
