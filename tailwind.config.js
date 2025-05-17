/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Elegant & Modern
        playfair: ['Playfair Display', 'serif'],
        lora: ['Lora', 'serif'],
        inter: ['Inter', 'sans-serif'],
      
        // Futuristic
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        exo: ['Exo', 'sans-serif'],
        quantico: ['Quantico', 'sans-serif'],
      
        // Minimalist & Aesthetic
        montserrat: ['Montserrat', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      
        // High-End & Luxurious
        cinzel: ['Cinzel', 'serif'],
        abril: ['Abril Fatface', 'serif'],

        // Additional Fonts
        sora: ["Sora", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
