import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/space-birthday/', // Change only if your repo name is different
  build: {
    outDir: 'dist',
  },
})