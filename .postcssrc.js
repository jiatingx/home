// https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
const path = require('path')

module.exports = ({ file }) => {
  const designWidth = file.dirname.includes(path.join('node_modules', 'vant'))
    ? 375
    : 750

  return {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: designWidth,
        unitPrecision: 5,
        propList: ['*'],
        selectorBlackList: ['.ignore', '.hairlines'],
        mediaQuery: true,
        exclude: [],
        include: []
      }
    }
  }
}
