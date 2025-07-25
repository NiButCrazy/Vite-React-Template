import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://cn.vitejs.dev/config
export default defineConfig({
  plugins: [
    react()
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
      '@global': resolve(__dirname, './src/global'),
      '@hooks': resolve(__dirname, './src/global')
    }
  }
})
