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
        'project-background': "url('https://forcythe.com/images/arc.svg')",
        'project-L-background': "url('https://forcythe.com/images/arc-L.svg')",
        'custom-gradient': 'linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)',
        'custom1-gradient': 'linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)',
        'custom2-gradient': 'linear-gradient(0deg, rgb(7, 22, 38) 20%, rgb(3, 5, 22) 69%)',
        'custom3-gradient': 'linear-gradient(rgb(7, 22, 38) 20%, rgb(3, 5, 22) 69%)',
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
