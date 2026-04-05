import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import '@shared/styles/global.less'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from '@renderer/routers'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>
)
