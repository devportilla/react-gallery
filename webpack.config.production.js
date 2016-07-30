/* eslint-disable no-var */
var webpack           = require('webpack');
var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer      = require('autoprefixer');

var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=false&includePaths[]=' + path.resolve(__dirname, './src')
];

module.exports = {
  entry: [
    'whatwg-fetch',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    root: path.resolve(path.join(__dirname, 'src'))
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(
      {
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }
    ),
    new webpack.optimize.UglifyJsPlugin(
      {
        compress: {
          warnings: false
        }
      }
    ),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
        include: path.join(__dirname, 'src')
      }
    ]
  },
  postcss: [
    autoprefixer(
      {
        browsers: ['last 2 versions']
      }
    )
  ],
};
