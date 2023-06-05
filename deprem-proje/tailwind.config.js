/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ozi: "rgba(246, 190, 49, 0.2)",
      },
    },
  },
  plugins: [],
};
