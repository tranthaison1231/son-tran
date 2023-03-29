/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/images/hero-bg.webp')",
      },
      keyframes: {
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
      },
      animation: {
        wave: 'wave 1.5s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
};
