/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/images/hero-bg.webp')",
      },
      keyframes: {
        'fade-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        jump: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(24px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        wave: 'wave 1.5s infinite',
        jump: 'jump 1.5s infinite',
        'fade-left': 'fade-left 1s ease-out',
        'fade-right': 'fade-right 1s ease-out',
        'fade-down': 'fade-down 1s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
};
