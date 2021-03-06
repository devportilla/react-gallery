var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=false',
  'sass-resources',
];

module.exports = {
  entry: [
    'whatwg-fetch',
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    root: path.resolve(path.join(__dirname, 'src')),
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'resources/styles')]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=dist/fonts/[name].[ext]'
      }
    ]
  },
  sassResources: [
    path.resolve(__dirname, './resources/styles/mixins.scss'),
  ],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './resources/styles'),
      path.resolve(__dirname, './resources/fonts'),
    ],
  },
  postcss: [
    autoprefixer(
      {
        browsers: ['last 2 versions']
      }
    )
  ],
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
