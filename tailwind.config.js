/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#404040",
        secondary: "#AEAEAE",
        gray: "#696969",
        "gray-light": "#EBEBEB",
        red: "#BB4430",
        yellow: "#FFC145",
        orange: "#F8964C",
        green: "#439A86",
        blue: "#197BBD",
        "main-bg": "#F9FAFB"
      },
    },
  },
  plugins: [],
}
