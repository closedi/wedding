import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // замените на ваш фреймворк

export default defineConfig({
	plugins: [react()],
	base: '/wedding/', // ← здесь задаётся базовый путь
})