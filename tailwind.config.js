/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FE8609",
          secondary: "#937DDB",
          accent: "#FFFCE1",
          neutral: "#FFFCE1",
          "base-100": "#0E100F",
          info: "#22d3ee",
          success: "#a3e635",
          warning: "#fde047",
          error: "#E64120",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

