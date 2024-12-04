import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AsciiNomads/',
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1600, },
  server: {
    host: true, 
    port: 3000,       
  },
})
