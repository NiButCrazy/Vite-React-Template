import { defineConfig } from 'vite'
import { resolve } from 'path'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import babel from '@rolldown/plugin-babel'

// https://cn.vitejs.dev/config
export default defineConfig({
  plugins: [
    // tanstack router 自动生成器
    tanstackRouter({ target: 'react', autoCodeSplitting: true, 
      generatedRouteTree: "src/routes/-routes.tree.ts" 
    }),
    UnoCSS(),
    react(),
    babel({
      presets: [ reactCompilerPreset() ]
    })
  ],
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: 'dashesOnly',
      generateScopedName: '[local]-[hash:5]'
    }
  },
  resolve: {
    alias: {
      '@renderer': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils'),
      '@shared': resolve(__dirname, './src/shared'),
      '@hooks': resolve(__dirname, './src/hooks')
    }
  }
})
