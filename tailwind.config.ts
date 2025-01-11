import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        primary: '#1e90ff',
      },
      backgroundImage: {
        'header-background': "url('https://forcythe.com/images/header-background.svg')",
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        marquee1: "marquee1 10s linear infinite",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee1: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
