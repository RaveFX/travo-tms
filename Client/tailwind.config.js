/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// const withMT = require("@material-tailwind/react/utils/withMT");
import withMT from '@material-tailwind/react/utils/withMT'
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      FontFace: ""
    },
  },
  plugins: [],
});
