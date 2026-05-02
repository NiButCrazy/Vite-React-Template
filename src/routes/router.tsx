import { createBrowserRouter } from 'react-router'
import { App, Home } from '@renderer/pages'

// 获取到 vite 基础 base 路径，当然生产环境也能使用
const base = import.meta.env.BASE_URL;

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home }
    ]
  }
], { basename: base })

export default router
