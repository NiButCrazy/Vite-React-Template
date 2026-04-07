import { createBrowserRouter } from 'react-router'
import { App, Home } from '@renderer/pages'

// 相当于应用创建的是一个相对路径，无需关注前面的路径是什么
const base = window.location.pathname

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
