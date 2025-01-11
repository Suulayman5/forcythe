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
      
    },
  },
  plugins: [],
} satisfies Config;
