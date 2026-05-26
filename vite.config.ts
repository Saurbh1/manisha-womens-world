import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcssPlugin from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcssPlugin()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})