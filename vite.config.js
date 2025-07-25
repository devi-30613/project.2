import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/project.2/',  // Replace with your actual repo name
  plugins: [react()],
})
