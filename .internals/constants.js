const path = require('path');
const userConfig = require('../config/constants');

const SRC = userConfig.sourceDir;
const STYLE_REGEX = /(\.css)|(\.less)$/i;
const FILE_REGEX = /\.(woff|woff2|otf|ttf|eot|svg|png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i;
const TEMPLATES_PATH = path.join(SRC, 'templates');
const SCRIPTS_PATH = path.join(SRC, 'scripts'); 

module.exports = {
  SRC,
  DST: userConfig.distDir,
  ASSETS_PATH: userConfig.assetsDir,
  PORT: userConfig.devServerPort,
  HOST: userConfig.devServerHost,
  STYLE_REGEX,
  FILE_REGEX,
  SCRIPTS_PATH,
  TEMPLATES_PATH,
  HOT_MODE: userConfig.hotMode,
}
