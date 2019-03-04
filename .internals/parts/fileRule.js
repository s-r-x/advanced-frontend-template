const { FILE_REGEX } = require('../constants');
module.exports = {
  test: FILE_REGEX,
  use: {
    loader: 'file-loader',
    options: {
      name: "[name].[hash:8].[ext]", 
    }
  }
};
