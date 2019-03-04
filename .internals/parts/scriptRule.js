module.exports = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        [ 
          '@babel/preset-env', 
          { 'useBuiltIns': 'usage', modules: false, }
        ],
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
      ],
    },
  }
};
