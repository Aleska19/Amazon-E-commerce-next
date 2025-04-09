// filepath: tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",   // Azul oscuro
        secondary: "#F97316", // Naranja
        highlight: "#FACC15", // Amarillo dorado
        light: "#F3F4F6",     // Gris claro
        dark: "#1E1E1E",      // Negro grisáceo
        global: "#FFFFFF",    // Blanco
      },
    },
  },
  plugins: [],
};