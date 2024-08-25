/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
        '50': '#e7f4ff',
        '100': '#d4ebff',
        '200': '#b1d9ff',
        '300': '#82beff',
        '400': '#5292ff',
        '500': '#2a68ff',
        '600': '#0738ff',
        '700': '#0031ff',
        '800': '#0228c0',
        '900': '#0d2fa2',
        '950': '#08195e',
    },
      }
    },
  },
  plugins: [],
}

