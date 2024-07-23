import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {
      purple500: "#633CFF",
      purple300: "#BEADFF",
      purple100: " EFEBFF",
      dark: "#333333",
      gray400: "#737373",
      gray200: "#d9d9d9",
      gray50: "#FAFAFA",
      background: "#FFFFFF",
      red400: "#FF3939",
    },

    fontFamily: {
      Instrument_Sans: "Instrument Sans, sans-serif",
    },

    fontSize: {
      base: "16px",
      xs: "12px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      sm: "14px",
      inherit: "inherit",
    },

    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },

  plugins: [],
};
export default config;
