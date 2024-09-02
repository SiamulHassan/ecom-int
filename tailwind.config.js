/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      white: "var(--white)",
      primary_color: "var(--primary_color)",
      secondary_color: "var(--secondary_color)",
      color_D9D: "var(--color_D9D)",
      color_424: "var(--color_424)",
      black: "var(--black)",

      /* bg colors */
      bg_DCD: "var(--bg_DCD)",
      bg_F2E: "var(--bg_F2E)",
      bg_F20: "var(--bg_F20)",
      bg_FF6: "var(--bg_FF6)",
      bg_677: "var(--bg_677)",
      bg_FFE: "var(--bg_FFE)",
      bg_153: "var(--bg_153)",

      /* border color */
      border_DCD: "var(--border_DCD)",
    },
    extend: {
      fontFamily: {
        primary_font: "var(--primary_font)",
      },
    },
  },
  plugins: [],
};
