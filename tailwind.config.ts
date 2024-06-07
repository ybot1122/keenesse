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
      borderGray: "#747476",
    },
    animation: {
      slideIn: "300ms 1 alternate slidein",
      closePlus: "100ms 1 linear closePlus",
      openPlus: "100ms 1 linear openPlus",
    },
    keyframes: {
      slidein: {
        "0%": { transform: "translateX(50%)" },
        "100%": { transform: "translateX(0px)" },
      },
      closePlus: {
        "0%": { transform: "rotate(90deg)" },
        "100%": { transform: "rotate(0)" },
      },
      openPlus: {
        "0%": { transform: "rotate(0)" },
        "100%": { transform: "rotate(90deg)" },
      },
    },
  },
  plugins: [],
};
export default config;
