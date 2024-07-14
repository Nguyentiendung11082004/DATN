/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00badb",
      },
      backgroundSize: {
        "50%": "50%",
      },
      keyframes: {
        "text-move": {
          from: {
            opacity: 0,
            paddingTop: "250px",
          },
          to: {
            paddingTop: "0px",
            opacity: 1,
          },
        },
        "page-effect": {
          from: {
            opacity: 0,
            paddingTop: "200px",
          },
          to: {
            paddingTop: "0px",
            opacity: 1,
          },
        },
      },
      animation: {
        "text-move": "text-move 1.2s", // Định nghĩa tên animation và thời gian
        "page-effect": "page-effect 1.5s",
      },
    },
  },
  plugins: [],
};
