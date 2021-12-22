module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  darkMode: "media",
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
