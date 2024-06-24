/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#3366FF",
        },
        white: {
          DEFAULT: "#fff",
        },
      },
    },
  },
  plugins: [],
};
