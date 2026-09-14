import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
//
// IMPORTANT for GitHub Pages: `base` must match your repo name.
// - Repo at github.com/YOUR_USERNAME/nowshinislam -> base: '/portfolio/' (current setting)
// - Repo at github.com/YOUR_USERNAME/YOUR_USERNAME.github.io (a user/profile site) -> base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
