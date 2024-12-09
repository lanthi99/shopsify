/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: "#FEC5BB",
        secondary: "#F08080",
        teritary:"#D68D96",
        violet:"#E8DFF5",
        pink:"#fce1e4",
        Yellow:"#fcf4dd",
        green:"#ddedea",
        violetD:"#9cadce",
        pinkD:"#d4afb9",
        yellowD:"#ffc09d",
        greenD:"#7ec4cf",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        }
      }
    },
  },
  plugins: [],
}

