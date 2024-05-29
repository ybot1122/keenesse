import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
  ],
  theme: {
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
  plugins: [nextui()],
};
export default config;
