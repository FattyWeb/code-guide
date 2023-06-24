import { resolve } from "path";
import theme from '../../theme/config'
import { path } from '@vuepress/utils'
import {defineUserConfig, viteBundler} from 'vuepress'
import { prismjsPlugin } from'@vuepress/plugin-prismjs' // 语法高亮
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/code-guide/',
  title: 'Code Guide by FattyWeb',
  description: 'Standards for developing flexible, durable, and sustainable HTML and CSS, and maintainable JavaScript',
  theme,
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: [ // 配置 @ 指代 src
          {
            find: "@",
            replacement: resolve(__dirname, "../../"),
          },
        ],
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import '@/theme/styles/vars.scss';`,
          },
        }
      }
    },
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, '../components'),
    }),
    prismjsPlugin({
    }),
    backToTopPlugin(),
  ],
})
