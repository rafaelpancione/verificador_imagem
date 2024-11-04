/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#071F56',      // Azul, para elementos principais
        secondary: '#3564DA',    // Amarelo, para elementos secundários ou de destaque
        accent: '#F6282C',       // Vermelho, para ênfase ou alertas
        background: '#f8f9fa',   // Cor de fundo clara
        header: '#3564DA',       // Cor azul para o cabeçalho
      },
    },
  },
  plugins: [],
};
