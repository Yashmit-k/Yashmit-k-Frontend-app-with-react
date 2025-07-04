import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 10000,
    cors: true,
    allowedHosts: [
      'yashmit-k-frontend-app-with-react.onrender.com',
      'localhost',
      '.onrender.com'
    ]
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 10000,
    cors: true,
    allowedHosts: [
      'yashmit-k-frontend-app-with-react.onrender.com',
      'localhost',
      '.onrender.com'
    ]
  }
})
