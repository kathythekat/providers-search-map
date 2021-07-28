module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      500: 500,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
