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
      screens: {
        xs: "320px",
        // => @media (min-width: 640px) { ... }
        sm: "560px",

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "960px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
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

