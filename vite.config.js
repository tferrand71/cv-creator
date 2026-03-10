import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // C'est cette ligne qui permet d'ouvrir le fichier index.html directement
    base: './',
})