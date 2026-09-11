import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        alabaster: {
          50: "#FCFBF9",
          100: "#FAF8F5",
          200: "#F4F1EA",
          300: "#EAE5DC",
          400: "#DDD6C8",
        },
        charcoal: {
          950: "#141413",
          900: "#1C1B1A",
          800: "#2D2B29",
          700: "#44403C",
          600: "#57534E",
          500: "#78716C",
          400: "#A8A29E",
        },
        bronze: {
          300: "#D6BF9E",
          400: "#C5A880",
          500: "#B38F5C",
          600: "#9E7B48",
          700: "#7A5E35",
        },
        sand: {
          50: "#FDFCFA",
          100: "#F7F5F0",
          200: "#EFECE4",
          300: "#E5E0D5",
        },
        obsidian: {
          950: "#060709",
          900: "#0A0B0E",
          850: "#0F1116",
          800: "#141720",
          700: "#1E222F",
        },
        gold: {
          300: "#F5E6B3",
          400: "#E5C158",
          500: "#D4AF37",
          600: "#B89628",
          700: "#8C711C",
        },
        emerald: {
          900: "#061A15",
          800: "#0A2E26",
          500: "#00C48C",
          400: "#10E0A3",
        },
        pearl: {
          100: "#FFFFFF",
          200: "#F8F9FA",
          300: "#ECEEF2",
          400: "#D2D6DF",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cinzel", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F5E6B3 0%, #D4AF37 50%, #8C711C 100%)",
        "radial-glow": "radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.15), transparent 70%)",
        "emerald-glow": "radial-gradient(circle at 50% 50%, rgba(0, 196, 140, 0.12), transparent 70%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
