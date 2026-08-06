
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path' // این ماژول نیتیو نود را ایمپورت کنید

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // کاراکتر @ را دقیقاً به پوشه src متصل می‌کند
      '@': path.resolve(__dirname, './src'),
    },
  },
})
