import {  path } from '@vuepress/utils'

export default  (options) => {
  // 返回一个主题对象
  return {
    name: 'vuepress-theme-code-guide',
    clientConfigFile: path.resolve(__dirname, 'client.js'),
    plugins: [
    ],
  }
}
