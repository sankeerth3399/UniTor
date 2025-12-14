import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
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
