import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'scrollable-container',  // This will safeguard your custom class
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        geist:["var(--font-geist)"],
        schibsted_grotesk:["var(--font-Schibsted_Grostek)"],
        libre_baskerville:["var(--font-Libre_Baskerville)"],
        exo_2:["var(--font-Exo_2)"]
      },
      backgroundImage:{
        banner :("url('../../public/banner.jpg')"),
        banner2 :("url('../../public/banner2.jpg')"),
        banner3 :("url('../../public/electronics.jpg')")
      }
    },
    keyframes:{
        movemenu:{
          '0%': { transform: 'translateX(150px)' },  
            '100%': { transform: 'translateX(0px)' }, 
      
        
      },
      moveRight: {
        '0%, 100%': { transform: 'translateX(0)' },  
          '50%': { transform: 'translateX(10px)' } },

          movenav:{
            '0%': { transform: 'translateY(-100%)' },  
              '100%': { transform: 'translateY(0px)' }, 
        
          
        }
    },
    animation:{
      movemenu: 'movemenu 1s ease-in-out forwards',
      moveRight: 'moveRight 1s ease-in-out infinite',
      movenav: 'movenav 0.9s ease-in-out forwards',
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} satisfies Config;
