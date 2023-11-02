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
      gradientColorStops: {
        "from-pink": "#F472B6",
        "to-purple": "#9333EA",
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
export default config;
