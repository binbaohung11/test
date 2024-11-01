import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        mainB: ["OSBold"],
        mainR: ["RBRegular"],
      },

      screens: {
        sm: "440px",
        md: "733px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1550px",
      },

      rotate: {
        "15": "15deg",
      },
    },
  },
  plugins: [],
};
export default config;
