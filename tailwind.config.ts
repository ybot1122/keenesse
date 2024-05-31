import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "rgb(20, 112, 175)",
      lightBlue: "rgb(142, 182, 220)",
      white: "#FFFFFF",
      gray: "#eaeaee",
    },
    animation: {
      slideIn: "300ms 1 alternate slidein",
    },
    keyframes: {
      slidein: {
        "0%": { transform: "translateX(50%)" },
        "100%": { transform: "translateX(0px)" },
      },
    },
  },
  plugins: [],
};
export default config;
