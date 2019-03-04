const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { SCRIPTS_PATH, SRC, DST } = require('./constants');

const isProd = process.env.NODE_ENV === 'production';
const createPage = require('./parts/createPage');
const htmlPages = require('../config/pages');
const scripts = require('../config/scripts');
const scriptRule = require('./parts/scriptRule');
const fileRule = require('./parts/fileRule');
const templateRule = require('./parts/templateRule');

const entries = Object.keys(scripts).reduce((acc, name) => { 
  acc[name] = path.join(SCRIPTS_PATH, scripts[name]);
  return acc;
}, {});
module.exports = {
  entry: entries,
  output: {
    filename: isProd ? '[name].[chunkhash:8].js' : '[name].js',
    chunkFilename: isProd ? '[name].[chunkhash:8].js' : '[id].js',
    path: DST,
  },
  module: {
    rules: [
      scriptRule,
      fileRule,
      templateRule,
      {
        test: /\.(frag)|(vert)$/,
        use: 'raw-loader',
      },
    ]
  },
  plugins: [
    ...htmlPages.map(config => createPage(config))
  ],
};
