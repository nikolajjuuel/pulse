/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        skeleton: {
          " 0%, 100%": {
            opacity: "1",
          },
          " 50% ": {
            opacity: ".5",
          },
        },
      },
      animation: {
        skeleton: "skeleton 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
