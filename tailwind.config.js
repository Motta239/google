module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fbgr: '#525B73',
        fbb: '#1877f2',
        fbg: '#45bd62',
        fby: '#f7b929',
        fbo: '#f5533d',
        fbp: '#f02849',
        cg: '#4e4e4e',
      },
      translate: ['group-hover', 'hover'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/forms')],
}
