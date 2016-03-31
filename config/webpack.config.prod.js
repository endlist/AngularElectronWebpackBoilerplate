var _ = require('lodash');
var path = require('path');
var baseConfig = require('./webpack.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = _.extend({}, baseConfig, {
  entry: './main',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test Application',
      template: 'index.ejs',
      filename: 'index.html'
    })
  ]
});
