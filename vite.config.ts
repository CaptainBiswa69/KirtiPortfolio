import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// IMPORTANT: Update this to match your GitHub repository name!
// If your repo is "kirti-portfolio", use: base: '/kirti-portfolio/'
// If your repo is "username.github.io", use: base: '/'
// Or use './' for relative paths (works everywhere but URLs are less clean)
const BASE_PATH = process.env.GH_PAGES_BASE || '/kirti-portfolio/';

export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
