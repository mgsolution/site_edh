import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import path from 'path'

export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  return {
  plugins: [
    react(),
    ViteImageOptimizer({})
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: isProduction ? '/site_edh/' : '/',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true,
    assetsInlineLimit: 4096
  }
  }
})
