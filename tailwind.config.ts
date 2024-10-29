import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      default: ["14px", "20px"],

      "compact-xl": ["18px", "20px"],
      "compact-lg": ["16px", "20px"],
      compact: ["14px", "20px"],
      "compact-sm": ["13px", "19px"],
      "compact-xs": ["12px", "20px"],

      xl: ["18px", "26px"],
      lg: ["16px", "26px"],
      md: ["14px", "26px"],
      sm: ["13px", "25px"],
      xs: ["12px", "26px"],
    },
    extend: {
      backgroundColor: {
        base: "var(--bg-base)",
        subtle: "var(--bg-subtle)",

        chip: {
          crimson: "var(--bg-chip-crimson)",
        },
      },
      textColor: {
        base: "var(--text-base)",
        subtle: "var(--text-subtle)",
        muted: "var(--text-muted)",
        inverted: "var(--text-inverted)",

        chip: {
          crimson: "var(--text-chip-crimson)",
          icon: "var(--icon-chip-crimson)",
        },
      },
      boxShadow: {
        "input-field": "var(--shadow-input-field)",
        "input-field-focus": "var(--shadow-input-field-focus)",
      },
      colors: {
        blue: {
          50: "rgb(var(--blue-50))",
          100: "rgb(var(--blue-100))",
          200: "rgb(var(--blue-200))",
          300: "rgb(var(--blue-300))",
          400: "rgb(var(--blue-400))",
          500: "rgb(var(--blue-500))",
          600: "rgb(var(--blue-600))",
          700: "rgb(var(--blue-700))",
          800: "rgb(var(--blue-800))",
          900: "rgb(var(--blue-900))",
          950: "rgb(var(--blue-950))",
        },
        crimson: {
          50: "rgb(var(--crimson-50))",
          100: "rgb(var(--crimson-100))",
          200: "rgb(var(--crimson-200))",
          300: "rgb(var(--crimson-300))",
          400: "rgb(var(--crimson-400))",
          500: "rgb(var(--crimson-500))",
          600: "rgb(var(--crimson-600))",
          700: "rgb(var(--crimson-700))",
          800: "rgb(var(--crimson-800))",
          900: "rgb(var(--crimson-900))",
          950: "rgb(var(--crimson-950))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
