module.exports = {
  theme: {
    extend: {           
      keyframes: {          
        overlayIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        imageIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.92) translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
      },
      animation: {
        overlayIn: 'overlayIn 0.4s ease-out forwards',
        imageIn: 'imageIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
