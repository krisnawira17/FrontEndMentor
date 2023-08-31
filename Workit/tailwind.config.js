/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fraunces: ["Fraunces", "serif"],
      manrope: ["Manrope", "sans-serif"],
    },
    fontSize: {
      headingL: "80px",
      headingM: "56px",
      headingS: "32px",
      body: "18px",
    },
    borderRadius: {
      headerRound: "80% 15%",
      full: "1000px",
    },
    colors: {
      "dark-purple": "#24053E",
      "davy-grey": "#584D62",
      "eucaplyptus-green": "#44FFA1",
      "ghost-white": "#FCF8FF",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
