import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react()],
  base: '/verificador_imagem/', // Substitua pelo nome do seu repositório
});
