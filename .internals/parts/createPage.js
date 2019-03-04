const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TEMPLATES_PATH } = require('../constants');
const path = require('path');

const defaultChunks = [ 'manifest', 'vendor' ];

module.exports = function(config) {
  const vars = config.vars || {};
  return new HtmlWebpackPlugin({
    title: config.title,
    template: path.join(TEMPLATES_PATH, config.template),
    filename: config.template.replace(/\.(hbs|handlebars)$/, '.html'),
    chunks: defaultChunks.concat(config.includeScripts),
    ...vars,
  });
}
