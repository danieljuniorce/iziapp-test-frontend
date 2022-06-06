import { defineConfig } from 'vite'
import tsconfigpaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigpaths()],
})
