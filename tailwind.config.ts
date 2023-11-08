import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
      },
      colors: {
        primary: {
          default: "#4f1271",
          100: "#f5e8fc",
          500: "#783f8e",
          700: "#591480",
          900: "#360552",
        },
        secondary: {
          default: "#c8c6d7",
          500: "#bfacc8",
        },
        tertialy: {
          default: "#4a4063",
        },
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
export default config;
