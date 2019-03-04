const { ASSETS_PATH, PORT, HOT_MODE } = require('../constants');
module.exports =  {
  stats: "errors-only",
  port: PORT || 8080,
  open: true,
  hot: HOT_MODE,
  overlay: true,
  contentBase: ASSETS_PATH,
  host: process.env.HOST || '0.0.0.0',
  writeToDisk: false,
  historyApiFallback: false,
};
