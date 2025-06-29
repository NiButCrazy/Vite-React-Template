import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwind()
  ],
  css: {
    modules: {
      localsConvention: 'dashesOnly',
      generateScopedName: '[local]-[hash:5]'
    }
  },
  resolve: {
    alias: {
      '@renderer': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils')
    }
  }
})
