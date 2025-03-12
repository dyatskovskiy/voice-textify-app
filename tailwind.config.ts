import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        lobster: ["var(--font-lobster)"],
      },
      colors: {
        globalBackground: "var(--global-background)",
        globalForeground: "var(--global-foreground)",
        borderColor: "var(--border-color)",
        hoverColor: "var(--hover-color)",
        primaryBg: "var(--primary-bg)",
        disabledColor: "var(--disabled-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
