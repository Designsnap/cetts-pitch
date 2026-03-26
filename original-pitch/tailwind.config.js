/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'Century Gothic', 'sans-serif'],
        lato: ['Lato', 'Corbel', 'sans-serif'],
        oswald: ['Oswald', 'Arial Narrow', 'sans-serif'],
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        'open-sans': ['Open Sans', 'Calibri', 'sans-serif'],
        merriweather: ['Merriweather', 'Constantia', 'serif'],
        josefin: ['Josefin Sans', 'Tw Cen MT', 'sans-serif'],
        nunito: ['Nunito', 'Candara', 'sans-serif'],
        lora: ['Lora', 'Palatino Linotype', 'serif'],
        rokkitt: ['Rokkitt', 'Rockwell', 'serif'],
        'source-sans': ['Source Sans 3', 'Segoe UI', 'sans-serif'],
        trocchi: ['Trocchi', 'Bookman Old Style', 'serif'],
        cardo: ['Cardo', 'Book Antiqua', 'serif'],
        lobster: ['Lobster', 'Gabriola', 'cursive'],
        arimo: ['Arimo', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
