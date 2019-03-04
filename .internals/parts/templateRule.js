const path = require('path');
const { TEMPLATES_PATH } = require('../constants');
module.exports = {
  test: /\.(handlebars|hbs)$/, 
  loader: "handlebars-loader",
  query: {
    partialDirs: [
      path.join(TEMPLATES_PATH, 'partials'),
    ],
    helperDirs: [
      path.join(TEMPLATES_PATH, 'helpers'),
    ],
  },
}
