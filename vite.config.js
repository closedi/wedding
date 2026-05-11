import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(({ mode }) => ({
	build: {
		outDir: 'dist',
		emptyOutDir: true
	},
	plugins: [react()]}))