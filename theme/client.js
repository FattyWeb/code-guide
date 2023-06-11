import { defineClientConfig } from '@vuepress/client'
import Layout from './layouts/theme/Layout.vue'
import NotFound from './layouts/theme/NotFound.vue'
import './styles/normal.scss'
import 'prismjs/themes/prism-solarizedlight.css'

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,
  },
})
