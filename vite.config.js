import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // esbuild: {
  //   include: /\.js$/,
  //   exclude: [],
  //   loader: 'jsx',
  // },
})
