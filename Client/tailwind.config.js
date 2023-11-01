/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F6F8FA",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        liner: "#377A85",
        green: "#2AB57D",
        dimBlack: "#979797",
        lightBlue: "#38A3A5",
        textGray: "#6B6B6B",
        button1: "#22577A",
        button2: "#57CC99",
        back: "#FAFAFA",
        dimGray: "#DADADA",
        green1: "#57CC99",
        green2: "#38A3A5",
        red: "#FF0000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
});
