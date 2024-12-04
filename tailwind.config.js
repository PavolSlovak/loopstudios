module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Alata", "sans-serif"],
      },
      letterSpacing: {
        widest: ".3rem",
      },
    },
  },

  plugins: [],
};
