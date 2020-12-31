const { css } = require('./vue.config')

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }]] // 这个是配置ant-design-vue 按需引入的 需要 npm install babel-plugin-import --save-dev
}
