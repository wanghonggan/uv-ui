import { createSSRApp } from 'vue'
import App from './App.vue'

// 引入 uv-ui 组件库
import uvUi from '../../index.js'
import '../../theme.scss'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uvUi)
  return {
    app
  }
}
