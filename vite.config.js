import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './docs',
  },
  base: '/space-travelers/',
  plugins: [react()],
})
