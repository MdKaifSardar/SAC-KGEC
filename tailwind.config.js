/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      screens: {
        sm: '640px',   // Default Tailwind small breakpoint
        md: '880px',   // Customized 'md' breakpoint
        lg: '1024px',  // Default Tailwind large breakpoint
        xl: '1280px',  // Default Tailwind extra-large breakpoint
        '2xl': '1536px', // Default Tailwind 2xl breakpoint
      },                    
    },
  },
  plugins: [],
}

