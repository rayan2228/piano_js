/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      maxWidth: {
        container: "1140px",
      },
      colors: {
        "white-active-shadow": "inset -5px 5px 20px rgba(0,0,0,0.2)",
        "black-active-shadow": "inset -5px -10px 10px rgba(255,255,255,0.1)",
      },
      backgroundImage: {
        "white-gradient": "linear-gradient(#fff 96%, #eee 4%)",
        "white-active-gradient":
          "linear-gradient(to bottom, #fff 0%, #eee 100%)",
        "black-gradient": "linear-gradient(#333, #000)",
        "black-active-gradient": "linear-gradient(to bottom, #000, #434343)",
      },
    },
  },
  plugins: [],
};
