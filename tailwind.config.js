/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Ensures Tailwind CSS is applied to all files in your 'src' directory
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loginSignup-mobile': "url('https://res.cloudinary.com/dztz5ltuq/image/upload/v1731529280/WhatsApp_Image_2024-11-14_at_01.49.22_9998f31d_mkgycc.jpg')",
        'loginSignup-desktop': "url('https://res.cloudinary.com/dztz5ltuq/image/upload/v1730327577/Designer_14_rjoyyr.jpg')",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      height: {
        'slider-mobile': '16rem',
        'slider-laptop': '24rem',
      },
      transitionProperty: {
        'width': 'width',
      },
      opacity: {
        '80': '0.8',
      },
      keyframes: {
        flip: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        carDrive: {
          '0%, 100%': { transform: 'translateX(-30px)' },
          '50%': { transform: 'translateX(60px)' },
        },
      },
      animation: {
        flip: 'flip 1.5s infinite',
        bounce: 'bounce 1s infinite',
        fade: 'fade 2s ease-in-out infinite',
        carDrive: 'carDrive 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
