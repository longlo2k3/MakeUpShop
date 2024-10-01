/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: '"Delius", cursive',
        krona: '"Krona One", sans-serif',
        mono: '"Fredoka", sans-serif',
      },
      colors: {
        dark: "#0C080B",
        green: "#1E3329",
        yellow: "#ffc94b",
        pink: "#fed2d1",
        "dark-grey": "#B8B8B8",
        "light-grey": "#ECECEC",
        light: "#FAFAFA",
      },
      zIndex: {
        "-1": -1,
      },
      container: {
        padding: {
          DEFAULT: "1rem",
        },
      },
      boxShadow: {
        lg: "10px 0px 20px rgba(0, 0, 0, 0.6)",
        xl: "5px 5px 10px rgba(0, 0, 0, 0.25)",
        sm: "0px 0px 20px rgba(0, 0, 0, 0.25) ",
      },
    },
  },
  plugins: [],
};
