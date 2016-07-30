var path              = require('path');
var webpack           = require('karma-webpack');
var webpackConfig     = require('./webpack.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=false&includePaths[]=' + path.resolve(__dirname, './src')
];

webpackConfig.module.loaders     = [
  {
    test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
    loader: 'babel-loader'
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
    include: path.join(__dirname, 'src')
  }
];
webpackConfig.module.postLoaders = [
  {
    test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components|tests)/,
    loader: 'istanbul-instrumenter'
  }
];

module.exports = function (config) {
  config.set(
    {
      frameworks: ['jasmine'],
      files: [
        './node_modules/phantomjs-polyfill/bind-polyfill.js',
        'src/components/**/*.spec.js'
      ],
      plugins: [
        webpack,
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-phantomjs-launcher',
        'karma-coverage',
        'karma-spec-reporter'
      ],
      browsers: ['PhantomJS'],
      preprocessors: {
        'src/components/**/*.spec.js': ['webpack'],
        'src/**/*.js': ['webpack']
      },
      reporters: ['spec', 'coverage'],
      coverageReporter: {
        dir: 'build/reports/coverage',
        reporters: [
          {type: 'html', subdir: 'report-html'},
          {type: 'lcov', subdir: 'report-lcov'},
          {type: 'cobertura', subdir: '.', file: 'coverage.txt'}
        ]
      },
      webpack: webpackConfig,
      webpackMiddleware: {noInfo: true}
    }
  );
};
