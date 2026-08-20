import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/me/',
  // Downloadable app builds live in src/assets/apps/**; Vite doesn't know these
  // extensions, so opt them in to get hashed, base-prefixed URLs.
  assetsInclude: ['**/*.apk'],
  plugins: [react()],
})
