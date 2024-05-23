/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,

      padding: "1rem",

      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
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

