import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const REPO_NAME = 'wedding'

export default defineConfig(({ mode }) => ({
	base: mode === 'production' ? `/${REPO_NAME}/` : '/',
	build: {
		outDir: 'dist/wedding', // опционально
		emptyOutDir: true
	},
	plugins: [react()]}))