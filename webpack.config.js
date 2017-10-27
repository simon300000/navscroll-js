const path = require('path');
const webpack = require('webpack');

const PROD = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: {
    'vue-scrollactive.js': './src/index.js',
    'vue-scrollactive.min.js': './src/index.js',
    'vue-scrollactive.vanilla.js': './src/index.js',
  },
  output: {
    filename: '[name]',
    path: __dirname,
    publicPath: '/dist/',
    library: ['vue-scrollactive'],
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        },
      },
    ],
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.(min|vanilla)\.js$/,
      minimize: true,
    }),
  ] : [],
};
