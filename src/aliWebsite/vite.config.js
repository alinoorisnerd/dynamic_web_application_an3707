import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // The midterm and class projects live outside this folder. Resolve these
    // from this project so every page shares one copy of each library.
    dedupe: [
      'react',
      'react-dom',
      'axios',
      'classnames',
      'react-icons',
      'react-router',
      'react-router-dom',
      'tailwind-merge',
    ],
  },
  server: {
    // Let the dev server read ../midterm and ../classCode, outside this folder.
    fs: {
      allow: ['..'],
    },
  },
})
