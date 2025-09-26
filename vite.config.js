import { defineConfig } from 'vite'

export default defineConfig({
  base: '/GustoVoyage/', // ⚠️ Mets ici le nom EXACT de ton repo GitHub
  build: {
    outDir: 'dist'
  }
})