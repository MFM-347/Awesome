/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#eff3ff",
          100: "#dae3ff",
          200: "#beceff",
          300: "#91b0ff",
          400: "#5d86fd",
          500: "#385cfa",
          600: "#2139ef",
          700: "#1926dc",
          800: "#1b21b2",
          900: "#1c238c",
          950: "#161855",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          ultra: "var(--background-ultra)",
        },
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
};
