/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ozi: "rgba(246, 190, 49, 0.3)",
        intro: "rgba(251, 240, 212, 0.3)",
        map: "rgba(251, 240, 212, 0.2)",
        volunteer: "rgba(248, 203, 78, 1)",
      },
      flex: {
        2: "2 2 0%",
      },
    },
  },
  plugins: [],
};
