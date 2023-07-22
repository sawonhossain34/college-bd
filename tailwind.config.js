/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#75C2F6",
        yellowColor: "#F4D160",
        purpleColor: "#FF78C4",
        irisBlueColor: "#45CFDD",
        headingColor: "#181A1E",
        textColor: "#4E545F",

      },
    },
  },
  plugins: [require("daisyui")],
}

