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
      fontSize: {
        "h": ["2rem", { lineHeight: "1.2" }],
        "h-xs": ["3rem", { lineHeight: "1.2" }],
        "h-sm": ["4.7rem", { lineHeight: "1.25" }],
        "h-md": ["6rem", { lineHeight: "1.25" }],
        "h-lg": ["7.7rem", { lineHeight: "1.25" }],
      },
      screens: {
        xs: "420px",
        sm: "648px",
        md: "820px",
        lg: "1228px"
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
export default config;
