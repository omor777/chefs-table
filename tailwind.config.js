/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1320px",
    },
    extend: {
      container: {
        center: true,
      },
      fontSize: {
        32: "2rem",
        52: "3.25rem",
      },
      colors: {
        main: "#0BE58A",
        black: {
          600: "#282828B2", //rgba(40, 40, 40, 0.70);
          700: "#150B2BB2",
          800: "#282828", //#282828
          900: "#150B2B",
        },
        gray: {
          100: "#150B2B0D",
          600: "#878787",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
