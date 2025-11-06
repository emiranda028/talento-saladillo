import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B7A78",
        secondary: "#17252A",
        accent: "#3AAFA9",
        surface: "#FEFFFF",
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
} satisfies Config;
