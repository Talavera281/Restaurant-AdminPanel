module.exports = {
  content: ['./src/**/*.{html,ts,css}'],
  theme: {
    extend: {
      backgroundImage:{
        'login-bg': "url('/loginImage.png')",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  safelist: [
    /^text-/,
    /^bg-/,
    /^hover:/,
  ],
  plugins: [],
};
