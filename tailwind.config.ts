import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--neutral-0)",
        foreground: "var(--neutral-900)",
        "neutral-900": "var(--neutral-900)",
        "neutral-700": "var(--neutral-700)",
        "neutral-200": "var(--neutral-200)",
        "neutral-100": "var(--neutral-100)",
        "neutral-0": "var(--neutral-0)",
        "light-salmon-500": "var(--light-salmon-500)",
        "light-salmon-100": "var(--light-salmon-100)",
        "light-salmon-50": "var(--light-salmon-50)",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)",
        gradient: "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
      },
      fontFamily: {
        sans: ["var(--font-inter-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
