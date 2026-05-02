
import { App } from '@renderer/pages'
import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

// 创建根路由
export const Route = createRootRoute({
  component: _RootComponent
})

function _RootComponent() {
  return (
    <>
      <App />
      <TanStackRouterDevtools />
    </>
  )
}