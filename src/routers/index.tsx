import { createBrowserRouter, Navigate } from 'react-router'
import { App, Home } from '@renderer/pages'


const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <Navigate to="/" replace />,
    children: [
      { index: true, Component: Home }
    ]
  }
])

export default router
