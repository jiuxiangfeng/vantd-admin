const path = require('path')
module.exports = {
  publicPath: './',
  transpileDependencies: ['vue-echarts', 'resize-detector'],
  // 第三方插件配置
  pluginOptions: {
    'style-resources-loader': {
      // 使用less全局变量需要安装 npm i style-resources-loader  --save-dev 和 npm i vue-cli-plugin-style-resources-loader --save-dev
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/css/main.less')] // less所在文件路径
    }
  },
  /* 按需引入样式 
   注意：必须是less-loader@6.0.0以上 
   注意样式必须加载 less 格式，一个常见的问题就是引入了多份样式，less 的样式被 css 的样式覆盖了。
  如果你在使用 babel-plugin-import 的 style 配置来引入样式，需要将配置值从 'css' 改为 true，这样会引入 less 文件。
  如果你是通过 'ant-design-vue/dist/antd.css' 引入样式的，改为 ant-design-vue/dist/antd.less。

  此处先不引用先注释，开发阶段，引入全局css文件，再通过覆盖变量方式调整全局样式比较容易调整，打包时候可以修改
  */
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1da57a',
            'link-color': '#1DA57A',
            'border-radius-base': '2px'
          },
          javascriptEnabled: true
        }
      }
    }
  }
}
