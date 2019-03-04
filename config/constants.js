const path = require('path');
const root = path.resolve(__dirname, '..');

module.exports = {
  devServerPort: 8080,
  devServerHost: '0.0.0.0',
  sourceDir: path.join(root, 'src'),
  distDir: path.join(root, 'dist'),
  assetsDir: path.join(root, 'assets'),
  hotMode: false,
};
