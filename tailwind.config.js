/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/Lakeland Map.jpeg")',
      },
    },
  },
  blocklist: ["collapse"],
  plugins: [],
};
