const webpack = require('webpack'),
  path = require('path')

if (process.env.NODE_ENV === 'production') {
  // 为生产环境修改配置...
} else {
  // 为开发环境修改配置...
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {// eslint-disable-line
    config.resolve.alias
      .set('@assets', resolve('src/assets'))
      .set('@img', resolve('src/assets/images'))
      .set('@blocks', resolve('src/components'))

    config.plugin('provide').use(webpack.ProvidePlugin, [
      {
        _: 'lodash'
      }
    ])
  },
  configureWebpack: config => { // eslint-disable-line
  },
  css: {
    loaderOptions: {
      postcss: {},
      scss: {
        additionalData: `@import "~@/assets/styles/variables.scss"`
      },
      less: {
        lessOptions: {
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "~@/assets/styles/variables.scss"`
          }
        }
      }
    }
  }
}
