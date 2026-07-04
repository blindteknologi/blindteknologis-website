import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const base =
  process.env.GITHUB_PAGES === 'true' ? '/blindteknologis-website/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
