import { createBrowserRouter } from 'react-router'
import { App, Home } from '@renderer/pages'


const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home }
    ]
  }
])

export default router
