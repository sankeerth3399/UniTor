import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    // REPLACE 'repo-name' WITH YOUR GITHUB REPOSITORY NAME
    base: '/repo-name/', 
    define: {
      // This allows your existing code using process.env.API_KEY to work
      'process.env.API_KEY': JSON.stringify(env.API_KEY), 
    },
  }
})
