const Path = require('path');
const IconfontPlugin = require('webpack-iconfont-plugin-nodejs');
const iconDir = 'src/icons';
const iconOutDir = 'src/assets/icon';
module.exports = {
  configureWebpack: {
    plugins: [
      new IconfontPlugin({
        fontName: 'iconfont',
        cssPrefix: 'main-icon',
        svgs: Path.join(iconDir, 'svgs/*.svg'),
        fontsOutput: iconOutDir,
        cssOutput: Path.join(iconOutDir, 'iconfont.css'),
        htmlOutput: Path.join(iconOutDir, 'preview.html'),
        // jsOutput: Path.join(iconOutDir, 'fonts.js'),
        formats: ['ttf', 'woff', 'woff2']
      }),
    ]
  }
}