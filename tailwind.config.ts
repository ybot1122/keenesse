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
      inputBg: "#fafafa",
      sendHover: "#428cbe",
      inputHover: "#fcfcfc",
      inputRequired: "#727272",
      errorBg: "#ce2c30",
      buyAccent: "#a5c8e0",
    },
    animation: {
      slideIn: "300ms 1 alternate slidein",
      slideOut: "300ms 1 alternate slideout",
      closePlus: "100ms 1 linear closePlus",
      openPlus: "100ms 1 linear openPlus",
      slideUpAndFadeIn: "700ms 1 ease-out slideUpAndFadeIn",
      slideRightAndFadeIn: "1400ms 1 ease-out slideRightAndFadeIn",
    },
    keyframes: {
      slidein: {
        "0%": { transform: "translateX(50%)" },
        "100%": { transform: "translateX(0px)" },
      },
      slideout: {
        "0%": { transform: "translateX(0px)" },
        "100%": { transform: "translateX(-100%)" },
      },
      closePlus: {
        "0%": { transform: "rotate(90deg)" },
        "100%": { transform: "rotate(0)" },
      },
      openPlus: {
        "0%": { transform: "rotate(0)" },
        "100%": { transform: "rotate(90deg)" },
      },
      slideUpAndFadeIn: {
        "0%": { transform: "translateY(100%)", opacity: "0" },
        "100%": { transform: "translateY(0px)", opacity: "1" },
      },
      slideRightAndFadeIn: {
        "0%": { transform: "translateX(-100%)", opacity: "0" },
        "50%": { opacity: "0" },
        "100%": { transform: "translateX(0px)", opacity: "1" },
      },
    },
  },
  plugins: [],
};
export default config;
