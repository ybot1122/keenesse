import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@ybot1122/toby-ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1470af",
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
        black: "#000000",
        yellow: "#FFF700",
        orange: "#fa664b",
      },
      animation: {
        slideIn: "300ms 1 alternate slidein",
        slideOut: "300ms 1 alternate slideout",
        slideUpAndFadeIn: "700ms 1 ease-out slideUpAndFadeIn",
        slideRightAndFadeIn: "1400ms 1 ease-out slideRightAndFadeIn",
        carouselSlideInToLeft: "200ms 1 alternate carouselSlideInToLeft",
        carouselSlideOutToLeft: "200ms 1 alternate carouselSlideOutToLeft",
        carouselSlideInToRight: "200ms 1 alternate carouselSlideInToRight",
        carouselSlideOutToRight: "200ms 1 alternate carouselSlideOutToRight",
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
        slideUpAndFadeIn: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        slideRightAndFadeIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        carouselSlideOutToLeft: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-100%)" },
        },
        carouselSlideInToLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0px)" },
        },
        carouselSlideOutToRight: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(100%)" },
        },
        carouselSlideInToRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
