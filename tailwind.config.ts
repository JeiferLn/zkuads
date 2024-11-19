import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modals/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        degrade: {
          dark: "#3B1578",
          light: "#5E4ACF",
        },
        purple: "#B6116B",
        pink: "#3B1578",
        black: "#1F1F1F",
        red: "#E03A3A",
        "light-pink": "#FF53C0",
        "extralight-pink": "#EF1EDA",
        content1: "#021024",
        primary: "#FF53C0",
        default: "#07234B",
        focus: "#003F98",
        overlay: "#000000",
        pow: "#E31DCF",
        zcoins: {
          red: "#F96513",
          blue: "#1CA4DF",
          yellow: "#FBBE0D",
        },
        zkuad: {
          red: "#E03A3A",
          yellow: "#C6A223",
          blue: "#3A5EE0",
          gradient: {
            red: {
              from: "#F70404",
              to: "#680101",
            },
            yellow: {
              from: "#FBBE0D",
              to: "#EE860C",
            },
            blue: {
              from: "#1CA4DF",
              to: "#0774A2",
            },
          },
        },
      },
      fontFamily: {
        "long-shot": ["Long Shot", "sans-serif"],
        "showcard-gothic": ["Showcard Gothic", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities(
        {
          ".scrollbar-hide": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          },
          ".scrollbar-hide::-webkit-scrollbar": {
            display: "none",
          },
        },
        ["responsive"]
      );
    },
    nextui({
      defaultTheme: "dark",
      addCommonColors: true,
    }),
  ],
};
