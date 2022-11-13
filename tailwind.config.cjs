/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      "2xs": 12,
      xs: 14,
      sm: 16,
      md: 18,
      large: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#FFF",
      yellow: "#F9B732",

      gray: {
        100: "#EEEEEE",
        200: "#9E9E9E",
        500: "#393939",
      },

      red: {
        300: "#EA6360",
      },

      blue: {
        marine: "#0E3758",
      },

      green: {
        ocean: "#5EA3AC",
      },
    },
    fontFamily: {
      sans: ["Poppins, sans-serif"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
