'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', path.resolve(__dirname, '../app/main.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dev'),
    filename: 'bundle.js'
  },
  resolve: {
    root: [
      path.resolve('../app'),
      path.resolve('../node_modules')
    ],
    alias: {
      angular: 'angular/angular',
      semantic: 'semantic-ui-css/semantic.css'
    },
    extensions: [ 
      '', '.js', '.html', '.css'
    ]
  },
  module: {
    loaders: [
      // Exports Angular
      { test: /[\/]angular\.js$/, loader: "exports?angular" },

      // File Loaders
      { test: /\.(woff2|woff|ttf|eot|svg|png)($|\?)/, loader: 'file' },
      { test: /\.ejs$/, loader: 'ejs' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.js$/, loader: 'babel' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DEV: Test Application',
      template: 'app/index.ejs',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
