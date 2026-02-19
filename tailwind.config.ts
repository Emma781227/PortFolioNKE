/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: "#f3f7ff",
          100: "#e6efff",
          200: "#c8dcff",
          300: "#9dc0ff",
          400: "#6ea0ff",
          500: "#4f86ff",
          600: "#3d6fe6",
          700: "#325ac0",
          800: "#2a4a9b",
          900: "#233f7d",
        },
      },
    },
  },
  plugins: [],
};
