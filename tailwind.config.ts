import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',

  ],
  prefix: "",
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
        'xl':'1080px',
        'lg':'900px',
        'md':'668px',
        'sm':'400px'

      },
      
    },
    colors:{
darkMode:'#121212',
darkCard:'#b1b1b1',
mainHeading:'#44475B',
activeColor:'#00B386',
subActiveColor:'#7C7E8C',
negativeColor:'#EB5B3C',
borderColor:'#E9E9EB',
darkBorderColor:'#2e2e2e',
cardBorder:'#F8F8F8',
footerColor:'#F0F0F2'




    },
    // borderColor:{
    //   borderCol:'#2e2e2e'
    // },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },

      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config