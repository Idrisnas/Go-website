// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      keyframes: {
        drive: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        driveReverse: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-100px)' },
        },
      },
      animation: {
        drive: 'drive 6s linear infinite',
        driveReverse: 'driveReverse 6s linear infinite',
      },
    },
  },
  plugins: [],
};
