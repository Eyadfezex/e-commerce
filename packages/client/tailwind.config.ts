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
        satoshi: ["Satoshi-Regular", "sans-serif"],
        satoshi_M: ["Satoshi-Medium", "sans-serif"],
        satoshi_B: ["Satoshi-Bold", "sans-serif"],
        IntegralCF_B: ["IntegralCF-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
